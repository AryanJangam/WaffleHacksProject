import React from 'react';

import './styles.css';

const Posts = ({title, artist, price, desc,ImgUrl}) => {
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
                </div>
            </div>
        </>
    );
}

export default Posts;