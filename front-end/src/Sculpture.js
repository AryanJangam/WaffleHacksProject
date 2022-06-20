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
        list.push({ name: element.name, imgUrl: element.thumbnailUrl });
        console.log(element.name);
        console.log(element.contentUrl);
      });
    })
    .catch((err) => console.error(err));
  // console.log(list);

  return (
    <nav className="pottery">
      <div>
        <div className="container">
          <div className="card">
            <div className="card__header">
              <img
                src="https://images.antiquesatlas.com/dealer-stock-images/belleantiques/Bronze_Sculpture_Of_Alexander__as785a038z-1.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>
                Photos of Neptune II sculpture by Francois Stahly in Paris -
                Page 162
              </h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://www.royaldecorations.fr/WebRoot/StoreLFR/Shops/62032137/5086/5EE6/7EC3/CD61/B136/C0A8/28B9/F4E7/Sculpture_en_bronze_bison.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>
                Modern Makonde Sculpture from the Collection of Izaak and Pera
                Wirszup
              </h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://cdn0.rubylane.com/_pod/item/358414/PS415/19th-Century-French-Sculpture-Entitled-Poetry-full-3o-2048-00000000-f.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>
                Reclining Figure sculpture inside Jardin des Tuileries - Page 81
              </h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://www.antiquers.com/attachments/b83ac1ae-c859-4db7-b253-bee44f42196f-jpeg.256891/"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>THE MONUMENTAL SCULPTURE | Inception Gallery | Artsy</h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://www.artskop.com/artmedia/wp-content/uploads/2019/08/William-Kentridge-why-should-I-hesitate-table-top-equestrian-sculpture-Norval-foundation-Zeitz-Mocaa-Artskop3437.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>
                Photos of Neptune II sculpture by Francois Stahly in Paris -
                Page 162
              </h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="http://www.henry-moore.org/images/cache/lg/whats-on/hmi-exhibitions/2015/a-study-of-modern-japanese-sculpture/modern-japanese-sculpture-install-4.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>Balance by Sandy Graves (Bronze Sculpture) | Artful Home</h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://antikspalato.com/storage/app/uploads/public/5e9/c45/b89/5e9c45b89eda0797028290.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>
                A Degas Sculpture Inspires a New Musical - The New York Times
              </h4>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img
                src="https://www.janeshawsculpture.com/wp-content/uploads/2020/11/Sculpture-Bronze-Figurative-Female-Torso-3-scaled.jpg"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <h4>Figurative Bronze Sculpture of a Female Torso</h4>
            </div>
            <div className="card__footer">
              <div className="user">
                <div className="user__info"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Sculpture;
