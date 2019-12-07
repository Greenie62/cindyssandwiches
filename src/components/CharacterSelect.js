import React, {Component} from "react"



class CharacterSelect extends Component{
    state={
        characters:[],
        is_loading:false,
    }




    componentDidMount=()=>{
        this.fetchData()
    }


    fetchData=()=>{
        this.setState({is_loading:true})
        fetch('https://swapi.co/api/people')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            var sliced=res.results.slice(0,7)
            console.log(sliced)
            this.setState({characters:sliced,
                           is_loading:false})
        })
    }


    render(){

        let content= <h1> Loading characters... </h1>

        if(!this.state.is_loading){
            content=(
                <React.Fragment>
                    <label htmlFor="characters">Select character: {this.props.charId}</label>
                    <select onChange={this.props.characterSelect} 
                            className={this.props.side}
                            value={this.props.charId}
                            name="charId">
                            {this.state.characters.map((c,i)=>(
                                <option key={i} value={i}>{c.name}</option>
                            ))}
                            </select>
                </React.Fragment>
            )
       
        }

        return content;
    }
}


export default CharacterSelect;