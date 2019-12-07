import React, {Component} from "react"
import {connect} from "react-redux"
import CharacterSelect from "../components/CharacterSelect"
import Character from "../components/Character"



class Starwars extends Component{
    state={
        charId:1,
        side:"light",
        is_destroyed:false

    }

    characterSelect=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    sideHandler=side=>{
        console.log("Side: " + side)
        this.setState({side})
    }

    destroyEverything=()=>{
        this.setState({is_destroyed:true})
    }


    render(){
        console.log(this.props.user)
        return(
            <React.Fragment>
       
     <div className='container'>
     <div className='starwars-card'>
     <CharacterSelect side={this.state.side} charId={this.state.charId} characterSelect={this.characterSelect}/>
     <Character charId={this.state.charId}/>
     </div>

     
     </div>

    
            </React.Fragment>

        )
    }
}

const mapStateToProps=(state)=>({
            user:state.data.user
})

export default connect(mapStateToProps,{}) (Starwars);