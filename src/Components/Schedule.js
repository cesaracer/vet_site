import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import data from '../Data/hours.json';

let randomNums = data.Openings
export default class Schedule extends React.Component{

    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            petName: '',
            petType: '', 
            available: []
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    handleSelection = e => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(data => {
        //     this.setState({
        //         available: data
        //     })
        // })
        this.setState({
            available: randomNums
        })
    }

    handleSubmit = e => {
        if(!this.verify()){
            e.preventDefault()
            window.alert("Fill out the form")
        }
    }

    verify = () => {
        console.log(this.state)
        if(this.state.firstName === ''){
            return false;
        }


        return true;
    }

    phoneRegex = new RegExp('[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4}')

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input type="text" name="phone" placeholder="Phone" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input onChange={this.handleSelection} type="date" name="date"/>
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <select name="time" onChange={this.handleChange}>
                            {
                                this.state.available.map(t => {
                                    return(
                                    <option value={t}>{t}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pet Name: </label>
                        <input type="text" name="petName" placeholder="Pet Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Pet Type: </label>
                        <select>
                            <option></option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Bird">Bird</option>
                            <option value="Reptile">Reptile</option>
                            <option value="Rodent">Rodent</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Reason For Visit</label>
                        <select>
                            <option></option>
                            <option>Vaccination</option>
                            <option>Microchip</option>
                            <option>Grooming</option>
                            <option>Check Up</option>
                        </select>
                    </div>
                    <div style={{float: "right"}}>
                        <Link id="btn" onClick={this.handleSubmit} to={{pathname: '/confirm', state: this.state}}>Next</Link>
                    </div>
                </form>
            </div>
        );
    }
    
}