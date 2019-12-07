import React, {Component} from "react"
import wheat from "../pics/bread/wheat.jpg"
import white from "../pics/bread/white.jpeg"




class Bread extends Component{
    state={
        bread:[
            {id:1,name:'wheat',img:wheat},
            {id:2,name:'white',img:white},
        ],
        counter:0,
    }
    selectHandler=()=>{
        var divs=document.querySelectorAll('.bread-div');
        if(this.state.counter === this.state.bread.length-1){
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
            d.className="bread-div"
        }
    })
    }


    render(){
        return(
            <div className='bread-container'>
            <div className='bread-header'>
            <h2 onClick={this.selectHandler}>Select Your Bread</h2>
            </div>
            <div className='products-body'>
            {this.state.bread.map(m=>(
                <div key={m.id} className='bread-div'>
                <img style={{height:50}} src={m.img}/>
                <h3>{m.name}</h3>
                </div>
            ))}
            </div>
            </div>
        )
    }
}


export default Bread;