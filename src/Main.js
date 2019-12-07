import React, {Component} from "react"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Home from "./pages/Home.js"
import Signin from "./pages/Signin.js"



class Main extends Component{
    state={
        loaded:false,
        auth:true,
    }

    onStateChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    setLogin=()=>{
        this.setState({auth:true})
    }


    render(){

        let content=(
            <Signin setLogin={this.setLogin}/>
        )
        if(this.state.auth){
            content=(
                <Home/>
            )
        }
        return content;
    }
}


export default Main;