import {GET_POSTS, ADD_POST, GET_CHARACTERS, STORE_USER, STORE_CHARACTER} from "./types.js"


export const getPosts=()=>(dispatch)=>{
    console.log("Get posts action fired")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        return res.json()
    })
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_POSTS,
            payload:res
        })
    })
}

export const addPosts=(post)=>(dispatch)=>{
 
        console.log(post)
        dispatch({
            type:ADD_POST,
            payload:post
        })
    
}

export const getCharacters=()=>(dispatch)=>{
    fetch('https://swapi.co/api/people')
    .then(res=>{
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        return res.json()
    })
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_CHARACTERS,
            payload:res
        })
    })
}


export const storeuser=(user)=>(dispatch)=>{
    console.log(user)

    dispatch({
        type:STORE_USER,
        payload:user
    })
}


export const storecharacter=(character)=>(dispatch)=>{
    console.log(character)

    dispatch({
        type:STORE_CHARACTER,
        payload:character
    })
}