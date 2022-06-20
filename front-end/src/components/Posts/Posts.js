import React from "react";

import "./styles.css";

const Posts = ({title, artist, price, desc, ImgUrl}) => {

    const handleClick = () => {
        document.getElementById('id01').style.display='block';
    }

    const handleCloseModal = () => {
        document.getElementById('id01').style.display='none';
    }

    // Get the modal
    var modal = document.getElementById('id01');
    // When the user clicks anywhere outside of the login page, the login page gets closed
    window.onclick = function(event) {
        if (event.target == modal) { 
            modal.style.display = "none";
    }}


    return(
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img src={ImgUrl} height="320" width="227" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{title}</h1>
                        <h2>{`by ${artist}`}</h2>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>{price}</span>$</p>
                        <button type="button">buy now</button>
                    </div>

                    <div id="id01" class="modal">
                        <div className='modal-content animate'>
                            <div className='container-dk'>
                                <strong><p>AUCTION STATUS</p></strong>
                                <p>Auction Limit - 300$</p>
                                <p>Current Bid - 150$</p>
                                <input type='number' placeholder='Enter your current bid'></input>
                                <button onClick={handleCloseModal} className='bid'>BID</button>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={handleClick} style={{width:"170px", marginTop:"10px"}} class="bid-btn">Bid</button>
                    
                </div>
            </div>
        </>
    );
}

export default Posts;
