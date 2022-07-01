import React from 'react';
import Logo from '../../components/common/Logo';
import './style.css';
import { useState } from "react";
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            const config = {
                headers:{
                    "Content-type": "application/json"
                    
                }
            }
			var url = "http://localhost:3000/user/login";
			 await axios.post(url, data, config).then((response) => {
                 var data = response.data
                console.log(response.status);
                console.log(data.accessToken);
                console.log(data.refreshToken)                

				if (data.role==='customer') {
                
				alert('Login successful')
                // window.location = "/Home";
				}
				else {
					alert('Please check your username and password')
				}
              });

            // console.log(data)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500 
                
			) {
				setError(error.response.data.message);
                console.log(error.response)
			}
		}
	};

  return (
    <div className='CustomerLogin_Container'>
        <div class="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <div className="textbox">
                <i className="fas fa-user"></i>
                <input type="email" name="email" placeholder="Email" required  onChange={handleChange} value={data.email}/>
            </div>
            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={data.password}/>
            </div>
            {error && <div className="error_msg">{error}</div>}
        <input type="submit" className="btn" value="Login"/>
        <p> Forgot your password? Click here</p>
        </form>
        </div>
    </div>
  )
};

export default Login;
