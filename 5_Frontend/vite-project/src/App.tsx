import { Component } from "react";
//import Counter from "./Pages/Home/Counter"
import Counter, {AppCont} from "./Pages/Home/Counter";



export class App extends Component{ 
  
  render() {
    return (
      <>
     <Counter/>
     <AppCont /> 
     </>
    )
  }
}

