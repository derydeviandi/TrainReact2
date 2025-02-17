import React, { Component } from 'react'
import axios from 'axios'

class login extends Component {

    onSignInClick = () => {
        let _username = this.username.value
        let _password = this.password.value

        // GET data
        axios.get(
            'http://localhost:2019/users',
            {
                params: {
                    username: _username,
                    password: _password
                }
            }
        ).then((res) => {
            if (res.data.length === 0) {
                console.log('Oppss Nothing In Here')
            } else {
                console.log(
                    `Ive found something:
                    username: ${res.data[0].username}
                    email: ${res.data[0].email}
                    password: ${res.data[0].password}`
                )
            }
        })
        this.username.value = ''
        this.password.value = ''
    }

    render() {
        return (
            <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Login</h1>
                    </div>
                    <form className='form-group'>
                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={(input) => { this.username = input }} className='form-control' type="text" />
                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={(input) => { this.password = input }} className='form-control' type="password" />
                    </form>
                    <button onClick={this.onSignInClick} className='btn btn-primary btn-block'>Sign In</button>
                </div>
            </div>
        )
    }
}

export default login
