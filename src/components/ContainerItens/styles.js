import styled from "styled-components";



export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 21px;

    display: flex;
    flex-direction: column;
    
    /* padding: 50px 36px; */
    padding: 15px;
    
    height: 110vh;
    
    ${props => props.resolution && `height: 100% `}


`