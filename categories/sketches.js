const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f2ed34c31mshd5f952f41b7c244p1d2d8cjsn1313966a21eb",
    "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  },
};

fetch(
  "https://bing-image-search1.p.rapidapi.com/images/search?q=sculpture",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let jsonReponse = response.value;
    jsonReponse.forEach((element) => {
      console.log(element.contentUrl);
    });
  })
  .catch((err) => console.error(err));
