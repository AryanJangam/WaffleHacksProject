import React from "react";

import Posts from "../Posts/Posts";

const Home = () => {
  const posts = [
    {
      title: "ABC",
      price: "100",
      artist: "Dyutika",
      desc: "lorem ipsum",
      imgUrl: "http://bit.ly/2tMBBTd",
    },
    {
      title: "XYZ",
      price: "70",
      artist: "Aryan",
      desc: "lorem ipsum",
      imgUrl: "http://bit.ly/2tMBBTd",
    },
    {
      title: "PQR",
      price: "30",
      artist: "Vaibhavi",
      desc: "lorem ipsum",
      imgUrl: "http://bit.ly/2tMBBTd",
    },
    {
      title: "MNO",
      price: "50",
      artist: "Rajkamal",
      desc: "lorem ipsum",
    },
    {
      title: "MNO",
      price: "50",
      artist: "Rajkamal",
      desc: "lorem ipsum",
    },
  ];

  return (
    <>
      <div className="grid">
        {posts.map((post) => (
          <Posts
            title={post.title}
            artist={post.artist}
            price={post.price}
            desc={post.desc}
            imgUrl={post.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
