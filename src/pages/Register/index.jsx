import React from 'react';
import Logo from '../../components/common/Logo';
import './style.css';
import { useState } from "react";
import axios from 'axios'
import Login from '../Login/index';
import Footer from '../../components/common/Footer/index'

const Register = () => {
    const [data, setData] = useState({ email: "", password: "", username: "", address: "", phoneNumber: "", role: "customer", R_ID: 3 });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            var url = "http://localhost:3000/user/register";

            await axios.post(url, data, config).then((response) => {
                var data = response.data
                console.log(response.status);
                console.log(data.accessToken);
                console.log(data.refreshToken);
                alert('Register successful')

            });

        } catch (error) {
            alert("Email already exists")
        }
    };

    return (
        <><div className='login' style={{ marginLeft: 50, marginRight: 50, marginTop: 10 }}>
            {/* logo in center */}
            <Logo />
            <div className='loginnreg'>
                <div class="row">
                    <div class="col">
                        {/* login user */}
                        <Login />
                    </div>
                    <div class="col">
                        {/* register user */}

                        <h1 class="formname">Create New Account</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Username */}
                            <label class="form-label" id='form-label'>Username</label>
                            <input type="text" name="username" placeholder="Enter Username" required onChange={handleChange} value={data.username} class="form-control"  style={{width:500}} />
                            {/* Email Address */}
                            <label class="form-label">Email</label>
                            <input type="email" name="email" placeholder="Enter Email Address" required onChange={handleChange}
                                value={data.email} class="form-control"  style={{width:500}}/>
                            {/* Phone Number */}
                            <label class="form-label">Mobile Number</label>
                            <input type="text" name="phoneNumber" placeholder="Enter Your Mobile Number" required onChange={handleChange} value={data.phoneNumber} class="form-control" style={{width:500}} />
                            {/* Address */}
                            <label class="form-label">Address</label>
                            <input type="text" name="address" placeholder="Enter Full Address" required onChange={handleChange} value={data.address} class="form-control"  style={{width:500}} />
                            {/* Password */}
                            <label class="form-label">Password</label>
                            <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} value={data.password} class="form-control"  style={{width:500}}/>
                            {/* Confirm Password */}
                            <label class="form-label">Confirm Password</label>
                            <input type="password" placeholder="Confirm your Password" class="form-control"  style={{width:500}}/>
                            {error && <div className="error_msg">{error}</div>}
                            <input type="submit" className="btn btn-danger" id="submitbutton" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* footer */}
        <Footer />
        </>
    )
};

export default Register;
