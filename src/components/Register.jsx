import React, { Component } from 'react'

import axios from 'axios'

class Register extends Component {

    onSubmitClick = () => {
        // ambil data dari text box
        let _username = this.username.value
        let _email = this.email.value
        let _password = this.password.value

        // post data
        axios.post(
            'http://localhost:2019/users',
            {
                username: _username,
                email: _email,
                password: _password
            }
        )
        this.username.value = ''
        this.email.value = ''
        this.password.value = ''

    }

    render() {
        return (
            <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Register</h1>
                    </div>
                    <form className='form-group'>
                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={(input) => { this.username = input }} className='form-control' type="text" />

                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input ref={(input) => { this.email = input }} className='form-control' type="email" />

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={(input) => { this.password = input }} className='form-control' type="password" />
                    </form>
                    <button onClick={this.onSubmitClick} className='btn btn-primary btn-block'>Submit</button>
                </div>
            </div>
        )
    }
}

export default Register

// untuk memberikan referensi ke suatu tag input, kita menggunakan attribute 'ref'
    // akan menerima function, function yg diterima akan memiliki satu inputan
    //  nama inputan tersebut bebas, biasanya akan diberi nama 'input'
