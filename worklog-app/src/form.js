import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import './navbar.js';
import Navbar from './navbar.js';
import axios from 'axios';

class LogForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            date : '',
            projectInfo : '',
            taskInfo : '',
            timeSpent : '',
            submission : false,
            employeeId: ''
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
        const empId = +this.props.match.params.id;
        this.setState({employeeId: empId});
        event.preventDefault();
        console.log(this.state);
        const project = {
            date : this.state.date,
            projectInfo : this.state.projectInfo,
            taskInfo : this.state.taskInfo,
            timeSpent : this.state.timeSpent 
          };
        axios.post("http://localhost:9092/employee/addProject/"+empId,project)
        .then(console.log("Data saved successfully!!!"))
        .then(this.setState({submission : true}));
    }
    

    render()
    {
        if(this.state.submission)
            return <Redirect to={'/workloglist/'+this.state.employeeId}  />; 
        return(
            <div>
                <Navbar />
            <div className="container" id="form-container">
                <form onSubmit={this.submitFormHandler}>
                    <div className="form-group">
                        <label>Date</label>
                        <input class="form-control" name="date" required type="text" onChange={this.changeHandler} placeholder="Enter date in 'mm/DD/YYYY' format" />
                    </div>
                    <div className="form-group">
                        <label>ProjectInfo</label>
                        <input class="form-control" name="projectInfo" required type="text" onChange={this.changeHandler} placeholder="Enter Project/Task Name" />
                    </div>
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea class="form-control" name="taskInfo"onChange={this.changeHandler} required placeholder="Enter Task Description" minlength="10" maxLength="200"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Time Spent</label>
                        <input class="form-control" name="timeSpent" required type="text" onChange={this.changeHandler} placeholder="Enter time spent in hours" />
                    </div>
                    <button type="submit" class="form-control btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}
export default LogForm;