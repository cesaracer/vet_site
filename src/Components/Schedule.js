import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/hours.json';

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
            appointmentType: '', 
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
        fetch('https://localhost:5000/api/times')
        .then(res => res.json())
        .then(data => {
            this.setState({
                available: data
            })
        })
        // this.setState({
        //     available: randomNums
        // })
    }

    handleSubmit = e => {
        if(this.state.firstName === '' || this.state.lastName === ''){
            alert("Please enter your name!")
            e.preventDefault();
            return;
        }
        if(this.state.email === ''){
            alert('Please enter your email!')
            e.preventDefault();
            return;
        }
        if(!this.phoneRegex.test(this.state.phone)){
            alert('Please enter a valid number!')
            e.preventDefault();
            return;
        }
        if(this.state.date === ''){
            alert('Please enter an appointment date!')
            e.preventDefault();
            return;
        }
        if(this.state.petName === ''){
            alert('Please tell us your pet\'s name!')
            e.preventDefault();
            return;
        }
        if(this.state.appointmentType === ''){
            alert('What can we do for you? Select an appointment type')
            e.preventDefault();
            return;
        }
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
                        <select name="appointmentType" onChange={this.handleChange}>
                            <option></option>
                            <option value="Vaccination">Vaccination</option>
                            <option value="Microchip">Microchip</option>
                            <option value="Grooming">Grooming</option>
                            <option value="Check Up">Check Up</option>
                        </select>
                    </div>
                    <div style={{float: "right"}}>
                        <Link class="btn" onClick={this.handleSubmit} to={{pathname: '/confirm', state: this.state}}>Next</Link>
                    </div>
                </form>
            </div>
        );
    }
    
}