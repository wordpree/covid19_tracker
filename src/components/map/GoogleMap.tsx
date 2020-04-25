import React, { Component } from "react";
import gmapStyles from "./mapStyle";
import { IGMaps } from "../../util/type";

declare var MarkerClusterer: any;

class GoogleMap extends Component<{ data: IGMaps[] }, {}> {
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
      this.markerCluster();
    });
  }

  googleMarker = () =>
    this.props.data.map(
      ({ countryInfo }) =>
        new window.google.maps.Marker({
          position: { lat: countryInfo.lat, lng: countryInfo.long },
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: {
            url: countryInfo.flag,
            scaledSize: new google.maps.Size(30, 30),
          },
        })
    );

  markerCluster = () => {
    new MarkerClusterer(this.map, this.marker, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  };

  googleMaps = () => {
    const options = {
      center: { lat: -27, lng: 133 },
      zoom: 5,
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
