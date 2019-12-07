import {GET_POSTS, ADD_POST, GET_CHARACTERS,STORE_USER, STORE_CHARACTER} from "../actions/types"

const initialState={
    posts:[],
    newpost:{},
    characters:[]
}


export default function (state=initialState,action){
    switch(action.type){

        case GET_POSTS:
        return{
            ...state,
            posts:action.payload
        }
        break;

        case ADD_POST:
        return{
            ...state,
            newpost:action.payload
        }
        break;

        case STORE_USER:
        console.log("Store user reducer fired")
        console.log(action.payload)
        return{
            ...state,
            user:action.payload
        }
        break;

        case STORE_CHARACTER:
        console.log("Store character reducer fired")
        console.log(action.payload)
        return{
            ...state,
            character:action.payload
        }
        break;

        case GET_CHARACTERS:
        return{
            ...state,
            characters:action.payload
        }
        break;

        default:
        return{
            state
        }
    }
}