'use client';
import React, { useState } from 'react';

const Card1 = () => {
    const [content, setContent] = useState({
        title: "Some title",
        description: "some description about this card and it's purpose."
    });

    const cardStyle: React.CSSProperties = {
        position: "relative",
        backgroundImage: "url('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-jBrhbr.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        width: "350px",
        height: "200px",
        border: "3px solid #fff",
        borderRadius: "20px",
        boxSizing: "border-box",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        transition: ".3s",
        overflow: "hidden"
    };

    const darkBackgroundStyle: React.CSSProperties = {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, .3)",
        top: 0,
        left: 0,
        borderRadius: "10px",
        transition: ".3s"
    };

    const mainTextStyle: React.CSSProperties = {
        position: "relative",
        fontSize: "40px",
        color: "#fff",
        textShadow: "1px 1px 1px #333"
    };

    const subTextStyle: React.CSSProperties = {
        position: "relative",
        margin: "auto",
        maxWidth: "250px",
        color: "#fff",
        textShadow: "1px 1px 1px #333",
        opacity: 0,
        transform: "translateY(30px)",
        transition: ".3s"
    };

    return (
        <div
            className="card1-content"
            style={cardStyle}
            onMouseEnter={(e) => {
                (e.currentTarget.querySelector('.dark-background') as HTMLDivElement).style.background = "transparent";
                (e.currentTarget.querySelector('.card1-sub-text') as HTMLParagraphElement).style.opacity = "1";
                (e.currentTarget.querySelector('.card1-sub-text') as HTMLParagraphElement).style.transform = "translateY(0px)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget.querySelector('.dark-background') as HTMLDivElement).style.background = "rgba(0, 0, 0, .3)";
                (e.currentTarget.querySelector('.card1-sub-text') as HTMLParagraphElement).style.opacity = "0";
                (e.currentTarget.querySelector('.card1-sub-text') as HTMLParagraphElement).style.transform = "translateY(30px)";
            }}
        >
            <div className="dark-background" style={darkBackgroundStyle}/>
            <h1 className="card1-main-text" style={mainTextStyle}>{content.title}</h1>
            <p className="card1-sub-text" style={subTextStyle}>{content.description}</p>
        </div>
    );
};

export default Card1;