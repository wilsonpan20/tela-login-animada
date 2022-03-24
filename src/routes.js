import React from "react";
import { BrowserRouter,Redirect,Route,Switch } from "react-router-dom";
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard'

const Routes = () =>(
   <BrowserRouter>
   <Switch>
       <Route path="/" exact component={SignIn}/>
       <Route path="/Dashboard" exact component={Dashboard}/>
   </Switch>
   </BrowserRouter>

    )



export default Routes;