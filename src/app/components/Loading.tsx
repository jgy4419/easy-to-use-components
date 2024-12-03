import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="loadingContainer">
                <span className="loader"></span>
            </div>
            <style jsx>{`
                .loader {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    position: absolute;
                    inset: 0;
                    margin: auto;
                    animation: rotate 1s linear infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .loader::before {
                    content: "";
                    box-sizing: border-box;
                    position: absolute;
                    inset: 0px;
                    border-radius: 50%;
                    border: 5px solid #FFF;
                    animation: prixClipFix 2s linear infinite ;
                }

                @keyframes rotate {
                    100%   {transform: rotate(360deg)}
                }

                @keyframes prixClipFix {
                    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
                    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
                    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
                    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
                    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
                }
            `}</style>
        </>
    );
};

export default Loading;