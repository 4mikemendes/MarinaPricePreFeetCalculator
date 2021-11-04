import React, { Component } from "react";
import "./PricePerFeet.css"

class PricePerFeet extends Component {
    constructor() {
        super()
        this.state={
            name: "",
            feet: "",
            math:"",
            days:"",
            total: ""
        }
        this.handelChange = this.handelChange.bind(this)
        this.math = this.math.bind(this)
        this.total = this.total.bind(this)
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
                math: prevState.feet * 0.20726399 
            }
        })
    }

    total(e) {
        e.preventDefault()
        this.setState(prevState => {
            return {
                total: prevState.days * prevState.feet * 0.21
            }
        })
    }

    render() {
       
        return(
        <div>

            <h1 className="title">Boat price per feet</h1>
            <label className="label">Boat specs</label>
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
                <input type="number" placeholder={"days"} name="days" total="total"
                onChange={this.handelChange} />
                <br/>
                <button className="button" onClick={this.total} >Submit</button>
            <h3> Name: {this.state.name} </h3>
            <h3> Brand: {this.state.brand} </h3>
            <h3> Length: {this.state.feet} </h3>
            <h3>Days: {this.state.days}</h3>
            <h3>Total: {this.state.total}</h3>
            </form>
            {/* <h4> Price per feet per day is: 0.20726399 eur  </h4> */}
        </div>
    )
    }
}

export default PricePerFeet