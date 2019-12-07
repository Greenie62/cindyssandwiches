import React from "react"
import {Provider} from "react-redux"
import store from "./store.js"
import Main from "./Main.js"
import "./App.css"

const App =()=>{

  return(
    <React.Fragment>
      <Provider store={store}>
      <Main/>
      </Provider>
    </React.Fragment>
  )
}

export default App;