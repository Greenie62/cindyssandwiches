import React, {Component} from "react"




class Classics extends Component{
    state={
        sandwiches:[],
        loaded:false,
    }


componentDidMount=()=>{
    console.log("CDM fired")
  

    const APP_ID="7faab8c7"
    const APP_KEY="87112dff57fc3b2900f9d06a7fb1decd";
    const url=`https://api.edamam.com/search?q=sandwiches&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=5`
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        this.setState({sandwiches:res.hits.map(s=>({
                            name:s.recipe.label,
                            pic:s.recipe.image,
                            calories:s.recipe.calories.toFixed(2),
                            price:((Math.random() * 4) + 8 || 0).toFixed(2)
        })),
                        loaded:true})
    })
}


    render(){
        if(!this.state.loaded){
            return "Loading..."
        }
        return(
            <div className={this.props.togglemenu ?'classic-container' : 'hide-classic-container'}>
                <h2>Classics</h2>
                <div className='classic-body'>
                {this.state.sandwiches.map((s,index)=>(
                    <li key={index} className='classic-item'>{s.name}  Price:${s.price} <img style={{height:30}} src={s.pic}/></li>
                ))}
                </div>
            </div>
        )
    }
}


export default Classics;