import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component
{
    render()
    {
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="head-nav">
            
                <div class="navbar-header">
                    <a class="navbar-brand" href="#" >WorkLog App</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" >
                    <div class="navbar-nav navbar-right" >
                            <NavLink to="/home" class="nav-item nav-link">Home</NavLink>
                            <NavLink to="/addemp" class="nav-item nav-link">Add User</NavLink>
                            <NavLink to="/login" class="nav-item nav-link">Logout</NavLink>
                    </div>
                </div>
                
        </nav>
        
        </div>

        );
    }
}
export default Navbar;