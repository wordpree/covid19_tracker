export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok !== true) throw new Error("fetch failed from server");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
