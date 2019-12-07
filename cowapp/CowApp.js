import React, {Component} from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Classics from "./components/Classics"
import ShoppingCart from "./components/ShoppingCart"
import Meats from "./components/Meats"
import Cheese from "./components/Cheese"
import Bread from "./components/Bread"
import Sides from "./components/Sides"
import Toppings from "./components/Toppings"
import "./CowApp.css"


class CowApp extends Component{
    state={
        togglemenu:false,
        togglecart:false,
        total:0,
        customer:"justin",
        items:[],
    }

    toggleMenu=()=>{
        console.log("function fired")
        if(this.state.togglecart){
        this.setState({togglemenu:!this.state.togglemenu,
                       togglecart:!this.state.togglecart})
        }
        else{
            this.setState({togglemenu:!this.state.togglemenu})
        }
    }

    toggleCart=()=>{
        console.log("function fired")
        if(this.state.togglemenu){
        this.setState({togglecart:!this.state.togglecart,
                       togglemenu:!this.state.togglemenu})
        }
        else{
            this.setState({togglecart:!this.state.togglecart})
        }
    }

    addMeat=()=>{
        var total=0
        total+=(4* Math.random() | 0) + 2
        this.setState({
                       total:this.state.total+total})
    }

    addCheese=()=>{
        var total=0
        total+=(3* Math.random() | 0) + 2
        this.setState({
                       total:this.state.total+total})
    }
    addBread=()=>{
        var total=0
        total+=(2* Math.random() | 0) + 1
        this.setState({
                       total:this.state.total+total})
    }

    addToppings=()=>{
       
        this.setState({
                       total:this.state.total+ .5})
    }




    render(){
        return(
            <React.Fragment>
                <Header/>
                <Navbar toggleCart={this.toggleCart} toggleMenu={this.toggleMenu}/>
               <Classics togglemenu={this.state.togglemenu}/>
              <ShoppingCart togglecart={this.state.togglecart} total={this.state.total} customer={this.state.customer} items={this.state.items}/>
              <Meats addMeat={this.addMeat}/>
              <Cheese addCheese={this.addCheese}/> 
              <Toppings addToppings={this.addToppings}/>
              <Bread addBread={this.addBread}/>
              <Sides/>
            </React.Fragment>
   
        )
    }
}


export default CowApp;