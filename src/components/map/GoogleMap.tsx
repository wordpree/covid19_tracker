import React, { Component } from "react";
import gmapStyles from "./mapStyle";
import { IGMaps, IGMapsCountry } from "../../util/type";
import { renderToString } from "react-dom/server";
import InfoWindowContent from "./infoWindow";

class GoogleMap extends Component<{ data: IGMaps }, {}> {
  private googleMapRef: React.RefObject<
    HTMLDivElement
  > | null = React.createRef();
  private map: any;
  private marker: any;

  componentDidMount() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPSJS_KEY}`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      this.map = this.googleMaps();
      this.marker = this.googleMarker();
    });
  }
  makeMarker = (option: any, position: any, scale: number) =>
    new window.google.maps.Marker({
      position,
      icon: { ...option, scale },
      map: this.map,
    });

  googleMarker = () => {
    const icon = {
      path: google.maps.SymbolPath.CIRCLE,
      strokeColor: "#FAB800",
      strokeOpacity: 0,
      strokeWeight: 1,
      fillColor: "#FAB800",
      fillOpacity: 0.8,
    };

    this.props.data.countries.forEach((country) => {
      const { countryInfo, cases } = country;
      const scale = 180 * Math.sqrt(cases / this.props.data.all.cases);
      const latlng = { lat: countryInfo.lat, lng: countryInfo.long };
      const marker = this.makeMarker(icon, latlng, scale);
      this.attachInfoToMarker(marker, country);
    });
  };

  attachInfoToMarker = (marker: any, countryCase: IGMapsCountry) => {
    const content: string = renderToString(
      <InfoWindowContent case={countryCase} />
    );
    const infoWindow = new google.maps.InfoWindow({ content });
    marker.addListener("mouseover", () => {
      infoWindow.open(this.map, marker);
    });
    marker.addListener("mouseout", () => {
      setTimeout(() => infoWindow.close(), 500);
    });
    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
  };

  googleMaps = () => {
    const options = {
      center: { lat: -27, lng: 133 },
      zoom: 3,
      styles: gmapStyles as any,
    };
    if (this.googleMapRef && this.googleMapRef.current) {
      return new window.google.maps.Map(this.googleMapRef.current, options);
    }
  };

  render() {
    return (
      <div
        id="google-maps"
        ref={this.googleMapRef}
        style={{ width: "100%", height: "75vh" }}
      ></div>
    );
  }
}

export default GoogleMap;
