import React, {Component} from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import {connect} from "react-redux"
import Navbar from "../components/Navbar.js"
import Starwars from "./Starwars.js"
import Posts from "./Posts.js"
import Wheel from "./Wheel.js"




class Home extends Component{
    state={
     
    }

    onStateChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }


    render(){
        console.log(this.props.user)
        return(
            <React.Fragment>
                <Router>
            <div className='home-header'>
     <h1>Home for {this.props.character ? this.props.character.name : 'anonymous'}</h1>
            </div>
            <Navbar/>
            <Switch>
                <Route exact path="/starwars" component={Starwars}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/wheel" component={Wheel}/>
            </Switch>
</Router>
            </React.Fragment>

        )
    }
}

const mapStateToProps=(state)=>({
            user:state.data.user,
            character:state.data.character
})

export default connect(mapStateToProps,{}) (Home);