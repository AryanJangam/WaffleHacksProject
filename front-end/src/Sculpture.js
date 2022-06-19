

const Sculpture = () => {

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
  
  let list = [];
  fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=skulpture",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let jsonReponse = response.value;
      
      
      jsonReponse.forEach((element) => {
        list.push({name: element.name, imgUrl:element.thumbnailUrl});
        //  console.log(element.contentUrl);
      });
  
      // list.forEach((element) => {
      //   console.log("Name: ", element.name, " url: ", element.imgUrl);
      // });
      
console.log(list[0].name);

    })
    .catch((err) => console.error(err));
    

    return(
      <nav className="sculpture">
          <div>
          <div className="container">
            {list.map((pic) => (
                <div className="card" style={{background: 'black'}}>
                <div className="card__header">
                  {/* <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/> */}
                  <img key={pic.imgUrl} src={pic.imgUrl} alt="card__image" class="card__image" width="600"/>
                </div>
                <p>{pic.imgUrl}</p>{console.log(pic.imgUrl)}
                <div className="card__body">
                  {/* <h4>What's new in 2022 Tech</h4> */}
                  <h4 key={pic.imgUrl}>{pic.name}</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                  <div className="user">
                    <div className="user__info">
                      <h5>Jane Doe</h5>
                    </div>
                  </div>
                </div>
              </div>
             ))}
              

              
        <p>hellooo</p>
          </div>
          </div>
      </nav>
  )
    
}

export default Sculpture