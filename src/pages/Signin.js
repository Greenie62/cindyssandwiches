import React, {Component} from "react"
import {connect} from "react-redux"
import {storeuser} from "../actions/mainAction"



class Signin extends Component{
    state={
        username:"",
        password:"",
        error:""
    }

    onStateChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    enterName=()=>{
        var user={
            name:this.state.username,
            password:this.state.password
        }
        this.props.storeuser(user);
        this.props.setLogin()
        
    }


    render(){
        return(
            <React.Fragment>
            <div className='signin-header'>
            <h1> Star Wars Sign-In </h1>
            </div>
            <div className='container'>
            <div className='signin-card'>
            <label htmlFor="username"><h3>Username:</h3></label>
            <input type='text' className="signininput" id='username' name='username' value={this.state.username} onChange={this.onStateChange} placeholder="username..." autoComplete="off"/>
            <label htmlFor="password"><h3>Password:</h3></label>
            <input type='text' className="signininput" id='password' name='password' value={this.state.password} onChange={this.onStateChange} placeholder="password..." autoComplete="off"/>
            <button onClick={this.enterName} className='signin-btn'>{this.state.username === "cindy" ? "whats up brat" : "sign-in"}</button>
            </div>
            </div>
            <div className='signin-footer'>
            <p>Footer</p>
            </div>

            </React.Fragment>

        )
    }
}

export default connect(null,{storeuser}) (Signin);