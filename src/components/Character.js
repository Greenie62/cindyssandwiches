import React, {Component} from "react"
import {connect} from "react-redux"
import {storecharacter} from "../actions/mainAction"


class Character extends Component{
    state={
        character:{},
        is_loading:false,
    }


    shouldComponentUpdate=(prevProps,prevState)=>{
        return(
            prevState.character.id !== this.state.character.id ||
            prevProps.charId !== this.props.charId 

        )
    }

    componentDidUpdate(prevProps){
        if(prevProps.charId !== this.props.charId){
            console.log("component needs to update")
            this.fetchData()
        }
    }


    componentDidMount=()=>{
        this.fetchData()
    }


    fetchData=()=>{
        this.setState({is_loading:true})
        fetch('https://swapi.co/api/people/' + (parseInt(this.props.charId) + 1))
        .then(res=>res.json())
        .then(res=>{
           // console.log(res)
            var character={
                id:parseInt(this.props.charId) + 1,
                name:res.name,
                colors:{
                    hair:res.hair_color,
                    skin:res.skin_color
                },
                films:res.films.length
            }
            console.log(character)
            this.props.storecharacter(character)
            this.setState({character:character,
                           is_loading:false})
        })
    }


    render(){
        let content=<h3>Content is loading... </h3>

        if(!this.state.is_loading && this.state.character.id !== undefined){
            content=(
                <>
                <h2>Name:{this.state.character.name} </h2>
                <h2>Hair_color:{this.state.character.colors.hair}</h2>
                <h2>Skin_color:{this.state.character.colors.skin}</h2>
                <h2>Films:{this.state.character.films}</h2>
                </>
            )
        }
        else if(!this.state.is_loading && this.state.character.id === undefined ){
            content= <h2>No data!! </h2>
        }

        return content;
    }
}


export default  connect(null,{storecharacter})(Character);