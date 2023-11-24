import styled from "styled-components"
import Background from '../../assets/fundo2.svg'



export const Container = styled.div`
    background: url("${Background}");
    background-size: cover ;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    height: 100%;
    min-height: 100vh;
    
    
    
    

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



// export const Button = styled.button`
//     color: #EEE;
//     border: 1px solid #FFFFFF;
//     border-radius: 14px;
//     background: transparent;
//     margin-top: 120px;
    
//     width: 342px;
//     height: 74px;
   

//     font-size: 17px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 28px; 
//     cursor: pointer;
//     display: flex;
//     flex-direction: row-reversed ;
//     justify-content: center;
//     align-items: center;
//     gap: 25px;

//     &:hover{
//         opacity: 0.8;
//     }
//     &:active{
//         opacity: 0.5;
//     }
// `

export const User = styled.li`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    height: 58px;

    width: 342px;
    padding: 16px;

    color: #EEE;

    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    outline: none;
    list-style: none;

    display: flex;
    justify-content: space-around;
    
    margin-top: 20px;

    img{
        cursor: pointer;
    }
    button{
        background: none;
        border: none;
    }



`