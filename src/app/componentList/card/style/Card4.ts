import styled from 'styled-components';

export const Card4Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
`

export const Card4Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const Card4Image = styled.img`
    width: 100px;
    object-fit: cover;
    border-radius: 20px;
    transition: 
        translate 0.25s,
        box-shadow 0.25s,
        transform 0.25s;
    box-sizing: border-box;
    &:hover {
        transform: 
            rotate(20deg)
            skew(-10deg, -5deg);
        
        translate: 0 -30px;
        box-shadow: 5px 3px lightgrey,
                    10px 6px grey,
                    15px 9px #333;
    }        
`
