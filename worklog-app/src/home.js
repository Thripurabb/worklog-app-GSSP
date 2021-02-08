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

class Home extends React.Component
{
    constructor(props){
        super(props);
        this.state ={
            employee: []
        }; 
    }
    componentDidMount(){
        axios.get("http://localhost:9092/employee/getAll")
            .then(response =>response.data)
            .then((data)=>{
                this.setState({employee: data});
            })
    }
    render()
    {
        return(
        <div>    
            <Navbar />
            <div class="container-fluid" id="card-container">
            <div class="card-columns">
                {
                this.state.employee.map((emp)=>(
                    <Link to={"/workloglist/"+emp.employeeId} id="cardlinks">
                    <div class="card" key={emp.employeeId}>
                        <img src="https://img.icons8.com/cotton/2x/person-male.png" 
                            class="card-img-top" />
                        <div class="card-body" style={{textAlign : "center"}}>
                            <h5 class="card-title" >{emp.employeeName} </h5>
                            <div class="card-text">
                                <div>{emp.employeeRole}</div>
                                <div>{emp.employeeServiceLine}</div>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
                )
                    
                }
                
            </div>
            </div>
            
        </div>
        );
    }
    
}
class Cards extends React.Component
{
    render()
    {
        return(
                <div class="card">
                <   img src="https://img.icons8.com/cotton/2x/person-male.png" 
                     class="card-img-top" />
                    <div class="card-body" style={{textAlign : "center"}}>
                        <h5 class="card-title" >{this.props.uname} </h5>
                        <div class="card-text">
                            <div>Programmer Analyst Trainee</div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Home;