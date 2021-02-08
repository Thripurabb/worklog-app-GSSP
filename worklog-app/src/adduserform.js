import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import './navbar.js';
import Navbar from './navbar.js';
import axios from 'axios';

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            employeeId: '',
            employeeName: '',
            employeeRole: '',
            employeeServiceLine: '',
            submission: false
        }
    }
    changeHandler = (event) =>
    {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        
    }
    submitFormHandler = (event) =>
    {
        //const empId = +this.props.match.params.id;
        //this.setState({employeeId: empId});
        event.preventDefault();
        console.log(this.state);
        const project = {
            employeeId : this.state.employeeId,
            employeeName : this.state.employeeName,
            employeeRole : this.state.employeeRole,
            employeeServiceLine : this.state.employeeServiceLine 
          };
        axios.post("http://localhost:9092/employee/addEmployee/",project)
        .then(console.log("Data saved successfully!!!"))
        .then(this.setState({submission : true}));
    }

    render(){
        if(this.state.submission)
            return <Redirect to='/home'/>; 
        return(
            <div>
                <Navbar />
            <div className="container" id="form-container">
                <form onSubmit={this.submitFormHandler}>
                    <div className="form-group">
                        <label>Employee Id</label>
                        <input class="form-control" name="employeeId" required type="text" onChange={this.changeHandler} placeholder="Enter employee Id" />
                    </div>
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input class="form-control" name="employeeName" required type="text" onChange={this.changeHandler} placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label>Employee Role</label>
                        <input class="form-control" name="employeeRole"onChange={this.changeHandler} required placeholder="Enter role"/>
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input class="form-control" name="employeeServiceLine" required type="text" onChange={this.changeHandler} placeholder="Enter department" />
                    </div>
                    <button type="submit" class="form-control btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}
export default UserForm;