// This is a admin login page for the admin to login to the admin dashboard. the username and password is hardcoded for now.
import React from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";



const AdminLogin = () => {
    const navigate = useNavigate();
    const submit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        
        if (username == "admin" && password == "admin") {
            alert("Login Success");
            navigate("/admin-dashboard");
        } else {
            alert("Login Failed");
        }

        event.target.username.value = "";
        event.target.password.value = "";

        

    };

    return (
        <>
        <div className="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={submit}>
            <label>Username</label>
            <input type="text" name="username" />
    
            <label>Password</label>
            <input type="password" name="password" />
    
            <button>Submit</button>
            </form>
        </div>
        </>
    );
    };

export default AdminLogin;