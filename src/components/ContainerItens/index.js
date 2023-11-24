import React from "react";

import { ContainerItens as Container } from "./styles";

function ContainerItens({children, resolution}){
    
    return <Container resolution={resolution}>{children}</Container>


}


export default ContainerItens