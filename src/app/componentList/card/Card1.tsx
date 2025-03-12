'use client';
import React, { useState } from 'react';
import './style/Card1.css';

const Card1 = () => {
    const [content, setContent] = useState({
        title: "Some title",
        description: "some description about this card and it's purpose."
    });

    return (
        <div className="card1-content">
            <div className="dark-background" />
            <h1 className="card1-main-text">{content.title}</h1>
            <p className="card1-sub-text">{content.description}</p>
        </div>
    );
};

export default Card1;