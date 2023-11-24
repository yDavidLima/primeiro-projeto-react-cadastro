import React from "react";
import { BrowserRouter as Router , Switch, Route  } from "react-router-dom/cjs/react-router-dom.min";

import Home from "./containers/Home"
import User from "./containers/Users"



function Routes(){

    return(

        <Router>
            <Switch>
            <Route exact path="/" component={Home}  /> 
            <Route exact path="/usuarios" component={User}/>
            </Switch>






        </Router>





    )



}

export default Routes