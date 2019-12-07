import React, {Component} from "react"
import ham from "../pics/meats/ham.jpg"
import salami from "../pics/meats/salami.jpeg"
import steak from "../pics/meats/steak.jpg"
import turkey from "../pics/meats/turkey.jpg"



class Meats extends Component{
    state={
        meats:[
            {id:1,name:'ham',img:ham},
            {id:2,name:'salami',img:salami},
            {id:3,name:'steak',img:steak},
            {id:4,name:'turkey',img:turkey},
        ],
        counter:0
    }

    selectHandler=()=>{
        var divs=document.querySelectorAll('.products-div');
        if(this.state.counter === this.state.meats.length-1){
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
            d.className="products-div"
      
        }
    })
    }



    render(){

        return(
            <div className='meats-container'>
            <div className='meats-header'>
            <h2 onClick={this.selectHandler}>Select Your Meat(s)</h2>
            </div>
            <div className='products-body'>
            {this.state.meats.map((m,index)=>(
                <div key={m.id} className='products-div'>
                <img onClick={this.props.addMeat} style={{height:50}} src={m.img}/>
                <h3>{m.name}</h3>
                </div>
            ))}
            </div>
            </div>
        )
    }
}


export default Meats;