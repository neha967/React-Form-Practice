import React, {Component} from 'react';
import './index.css';

class Myform extends Component {
	constructor(props){
		super(props);
		this.state={
			username: "",
			age: null,
            errormessage: "",
            message: "Your message here pls",
            mycar: "Fiat"			
			};
	}
	myChangeHandler = (e) => {
		let nam = e.target.name;
		let val = e.target.value;
		let err = "";
		if(nam === "age"){
			if(isNaN(val) || val == ""){
				err = <strong> Age must be a number</strong>;
			}
		}
		this.setState({[nam]: val});
		this.setState({errormessage: err});
	}
	mySubmitHandler = (e) => {
		e.preventDefault();
		alert("You are about to Submit " + this.state.username);
	}
 render(){
	 let header = "";
	 if(this.state.username){
		 header = <h1>Hello {this.state.username} {this.state.age}</h1>
	 } else {
		 header = ""
	 }
	 const mystyle = {
		 color: "red",
		 border: "1px solid black",
		 padding: "10px"
	 }
  return (
   <div>
   <h1>Hi, my name is <span style={{color: "red", backgroundColor: "yellow"}}>Neha</span></h1>  
   <p style={mystyle}>I'm from India but I live in Netherlands</p>   
   <form onSubmit={this.mySubmitHandler}>
   {header}
   <label for="username">Enter your name</label><br></br>
   <input type="text" name="username" placeholder="First Name" onChange={this.myChangeHandler}/><br></br><br></br>
   <label for="age">Enter your age</label><br></br>
   <input type="text" name="age" placeholder="Age" onChange={this.myChangeHandler}/><br></br><br></br>
   {this.state.errormessage}<br></br>
   <textarea value={this.state.message}/><br></br>
   <select value={this.state.mycar}>
     <option value="Ford">Ford</option>
	 <option value="Volvo">Volvo</option>
	 <option value="Fiat">Fiat</option>
   </select><br></br><br></br>
   <input type="submit" value="submit" />
   </form>
   </div>
  );
 }
}

export default Myform;
