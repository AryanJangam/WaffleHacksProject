
const Sculpture = () => {

    return(
        <nav className="sculpture">
            <div>
            <div className="container">
              {/* {list.map((pic) => ( */}
                  <div className="card">
                  <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                    {/* <img key={pic.imgUrl} src={pic.imgUrl} alt="card__image" class="card__image" width="600"/> */}
                  </div>
                  <div className="card__body">
                    <h4>What's new in 2022 Tech</h4>
                    {/* <h4 key={pic.imgUrl}>{pic.name}</h4> */}
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
              {/* ))} */}
                

                <div className="card">
                  <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                  </div>
                  <div className="card__body">
                    <h4>What's new in 2022 Tech</h4>
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

                <div className="card">
                  <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                  </div>
                  <div className="card__body">
                    <h4>What's new in 2022 Tech</h4>
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

                <div className="card">
                  <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                  </div>
                  <div className="card__body">
                    <h4>What's new in 2022 Tech</h4>
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

            </div>
            </div>
        </nav>
    )
}

export default Sculpture