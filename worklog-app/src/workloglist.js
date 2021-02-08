import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from './navbar.js';

class List extends React.Component
{ 
    constructor(props){
        super(props);
        this.state = {
            employee: []
        };
    }
    componentDidMount() {
        const empId = +this.props.match.params.id;
        if(empId) {
            axios.get("http://localhost:9092/employee/get/"+empId)
                .then(response => {
                    if(response.data!=null)
                    {
                        this.setState({employee: response.data});
                        console.log(response.data);
                    }
                })
        }
    }
    render()
    {
        return(
            <div>    
                <Navbar /><br/>
                <div class="container table-responsive">
                    <table class="table table-striped table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Task Info</th>
                                <th scope="col">Time Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.employee.projectInfo == null ?
                                <tr align="center">
                                    <td colspan ="4">No Tasks Available.</td>
                                </tr> :
                                this.state.employee.projectInfo.map((proj) =>(
                                    <tr key={proj.date}>
                                        <td>{proj.date}</td>
                                        <td>{proj.projectInfo}</td>
                                        <td>{proj.taskInfo}</td>
                                        <td>{proj.timeSpent}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div class="container" id="addbtncontainer">
                    <Link to={"/form/" + this.state.employee.employeeId} id="addbtnlink">
                        <button type="button" id="addbtn" class="btn btn-dark btn-block">Add New
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default List;