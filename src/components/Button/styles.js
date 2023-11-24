import styled from "styled-components";


export const Button = styled.button`
    color: #EEE;
    border: ${props => props.color ? `1px solid #FFFFFF` : `none`};
    border-radius: 14px;
    background: ${props => props.color ? `transparent` : `rgba(0, 0, 0, 0.80)`};
    margin-top: 95px;
    
    width: 342px;
    height: 74px;
   

    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`