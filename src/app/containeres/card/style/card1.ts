import styled from 'styled-components';

export const Card1Container = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    background-color: #eeeeee;
`

export const Card1Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
`

export const DarkBackGround = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: .3s;
`

export const Card1MainText = styled.h1`
    position: relative;
    font-size: 40px;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
`

export const Card1SubText = styled.p`
    position: relative;
    margin: auto;
    max-width: 250px;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    opacity: 0;
    transform: translateY(30px);    
    transition: .3s;
`

export const Card1Content = styled.div`
    position: absolute;
    background-image: url('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-jBrhbr.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    object-fit: cover;
    width: 350px;
    height: 200px;
    border: 3px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    &:hover {
        ${DarkBackGround} {
            background: transparent;
            transition: .3s;
        }
        ${Card1SubText} {
            opacity: 1;
            transform: translateY(0px);
            transition: .3s;
        }
    }
`