import React, { Component } from "react";
import "./PricePerFeet.css"

class PricePerFeet extends Component {
    constructor() {
        super()
        this.state={
            name: "",
            feet: "",
            math:""
        }
        this.handelChange = this.handelChange.bind(this)
        this.math = this.math.bind(this)
    }
    handelChange(e) {
      
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    math(e) {
        e.preventDefault()
        this.setState(prevState => {
            return {
                math: prevState.feet * 15 
            }
        })
    }

    render() {
       
        return(
        <div>

            <h1 className="title">Boat price per feet</h1>
            <label className="label">Name of boat</label>
            <form className="form">
                <input type="text" placeholder={"boat name"} name="name"
                onChange={this.handelChange}/>
                <br/>
                <input type="text" placeholder={"Brand"} name="brand"
                onChange={this.handelChange}/>
                <br/>
                <input type="number" placeholder={"feet"} name="feet" math="math"
                onChange={this.handelChange} />
                <br/>
                <button className="button" onClick={this.math} >Submit</button>
            <h3>{this.state.name} {this.state.brand} {this.state.feet} </h3>
            <h4> Your price in eur per day is: {this.state.math}   </h4>
            </form>
        </div>
    )
    }
}

export default PricePerFeet