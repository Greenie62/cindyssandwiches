import React, {Component} from "react"
import cheddar from "../pics/cheese/cheddar.jpg"
import pepperjack from "../pics/cheese/pepperjack.jpg"
import provolone from "../pics/cheese/provolone.jpeg"
import swiss from "../pics/cheese/swiss.jpg"




class Cheese extends Component{
    state={
        cheese:[
           { id:1,name:'cheddar',img:cheddar},
           { id:2,name:'pepperjack', img:pepperjack},
           { id:3,name:'provolone',img:provolone},
           { id:4,name:'swiss', img:swiss}
        ],
        counter:0,
    }

    selectHandler=()=>{
        var divs=document.querySelectorAll('.cheese-div');
        if(this.state.counter === this.state.cheese.length-1){
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
            d.className="cheese-div"
        }
    })
    }



    render(){
        return(
            <div className='cheese-container'>
            <div className='cheese-header'>
            <h2 onClick={this.selectHandler}>Select Your Cheese</h2>
            </div>
            <div className='products-body'>
            {this.state.cheese.map(m=>(
                <div key={m.id} className='cheese-div'>
                <img style={{height:50}} src={m.img}/>
                <h3>{m.name}</h3>
                </div>
            ))}
            </div>
            </div>
        )
    }
}


export default Cheese;