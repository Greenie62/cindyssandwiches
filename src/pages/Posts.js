import React, {Component} from "react"
import {connect} from "react-redux"
import {getPosts} from "../actions/mainAction"



class Posts extends Component{
    state={
     
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newpost){
            console.log("ohh we got it!")
        }
    }

    componentDidMount=()=>{
        this.props.getPosts()
    }

    onStateChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }


    render(){
        console.log(this.props.user)
        return(
            <React.Fragment>
       
     <h1>Posts</h1>
     {this.props.posts ? this.props.posts.map(p=>(
         <li key={p.id}><h3>{p.title}</h3><p>{p.bod}</p></li>
     )): "No Posts Yet!:("}
    
            </React.Fragment>

        )
    }
}

const mapStateToProps=(state)=>({
            posts:state.data.posts
})

export default connect(mapStateToProps,{getPosts}) (Posts);