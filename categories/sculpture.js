class sModel {
  constructor(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
  }
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f2ed34c31mshd5f952f41b7c244p1d2d8cjsn1313966a21eb",
    "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  },
};

fetch(
  "https://bing-image-search1.p.rapidapi.com/images/search?q=skulpture",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let jsonReponse = response.value;

    let list = [];
    jsonReponse.forEach((element) => {
      list.push(new sModel(element.name, element.thumbnailUrl));
      //  console.log(element.contentUrl);
    });

    list.forEach((element) => {
      console.log("Name: ", element.name, " url: ", element.imgUrl);
    });
    // console.log(list);
  })
  .catch((err) => console.error(err));
