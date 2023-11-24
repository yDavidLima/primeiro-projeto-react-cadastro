import styled from "styled-components"
import Background from '../../assets/fundo1.svg'




export const Container = styled.div`
    background: url("${Background}");
    background-size: cover ;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    height: 110vh;
    
    
    
    

`

export const Image = styled.img`
    margin-top: 20px;
    
`


// export const ContainerItens = styled.div`
//     background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
//     border-radius: 21px;

//     display: flex;
//     flex-direction: column;
    
//     /* padding: 50px 36px; */
//     padding: 15px;
    
//     height: 110vh;
    

// `




export const P = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
    letter-spacing: -0.408px;
    margin-left: 15px;

    

`

export const Inputs = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 34px;
    border: none;
    height: 58px;
    width: 342px;
    padding: 16px;
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;



`


