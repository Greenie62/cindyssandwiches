import React, {Component} from "react"
import bacon from "../pics/toppings/bacon.jpg"
import onions from "../pics/toppings/onions.jpg"
import pickles from "../pics/toppings/pickles.jpg"
import tomatoes from "../pics/toppings/tomatoes.jpg"
import lettuce from "../pics/toppings/lettuce.jpg"



class Toppings extends Component{
    state={
        toppings:[
            { id:1,name:'bacon',img:bacon},
            { id:2,name:'lettuce', img:lettuce},
            { id:3,name:'onions',img:onions},
            { id:4,name:'pickles', img:pickles},
            { id:5,name:'tomatoes', img:tomatoes},
         ],
         counter:0
    }


    selectHandler=()=>{
        var divs=document.querySelectorAll('.toppings-div');
        if(this.state.counter === this.state.toppings.length-1){
            this.setState({counter:0})
        }
        else{
        this.setState({counter:this.state.counter+1})
    }
    divs.forEach((d,index)=>{
        if(index === this.state.counter){
            d.className += " highlight"
        }
        else{
            d.className="toppings-div"
        }
    })
    }


    render(){
        return(
            <div className='toppings-container'>
            <div className='toppings-header'>
            <h2 onClick={this.selectHandler}>Select Your Topping(s)</h2>
            </div>
            <div className='products-body'>
            {this.state.toppings.map(m=>(
                <div key={m.id} className='toppings-div'>
                <img style={{height:50}} src={m.img}/>
                <h3>{m.name}</h3>
                </div>
            ))}
            </div>
            </div>
        )
    }
}


export default Toppings;