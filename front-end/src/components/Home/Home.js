import React from 'react';

import Posts from '../Posts/Posts';

const Home = () => {

    const posts = [
        {
            title: "Affirmation",
            price: "100",
            artist: "Dyutika",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Snippets of Pros",
            price: '70',
            artist: "Aryan",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            
        },
        {
            title: "Box of Words",
            price: "30",
            artist: "Vaibhavi",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Blackout Poetry",
            price: "50",
            artist: "Rajkamal",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Feelings",
            price: "80",
            artist: "Amelia",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Color Rush",
            price: "150",
            artist: "Charlotte",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Halo",
            price: "99",
            artist: "Emma",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Miles",
            price: "49",
            artist: "Oliver",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Raddison",
            price: "89",
            artist: "Elijah",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Guttenaiben",
            price: "52",
            artist: "Liam",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1578059457703-850565b053f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Straveria",
            price: "100",
            artist: "Noah",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Eshhiez",
            price: "500",
            artist: "Noah",
            desc: "lorem ipsum",
            ImgUrl:"https://images.unsplash.com/photo-1578393098337-5594cce112da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]

    return(
        <>
            <div className='grid'>
                {posts.map((post) => (
                    <Posts title={post.title} artist={post.artist} price={post.price} desc={post.desc} ImgUrl={post.ImgUrl}/>
                ))}
            </div>
        </>
    );
}

export default Home;