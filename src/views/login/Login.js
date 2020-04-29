import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { login, getUsers } from './action';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert('Vui lòng nhập email và mật khẩu')
        } else {
            const dataLogin = { email, password };
            props.onLogin(dataLogin);
        }
    };

    const getListUser = (e) => {
        e.preventDefault();
        props.onGetUsers();
    }

    useEffect(() => {
        console.log({ users: props.users })
    }, [props.users])

    return (
        <div id="login" className="login">
            <form
                className="form-login"
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onLogin}
            >
                {/* <input
                    className="email"
                    placeholder="Nhập username"
                    value={username}
                    onChange={email => setUsername(email.target.value)}
                />
                <input
                    className="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={email => setEmail(email.target.value)}
                />
                <input
                    className="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                    value={password}
                    onChange={password => setPassword(password.target.value)}
                />
                <button type={'submit'} className={'btn-login'}>
                    Register
                </button> */}

                <button className={'btn-login'} onClick={getListUser}>
                    Get list user
                </button>
            </form>
        </div>
    )
};

const mstp = state => ({
    users: state.loginReducer.users
});
const mdtp = dispatch => ({
    onLogin: (data) => dispatch(login(data)),
    onGetUsers: () => dispatch(getUsers())
})

export default connect(mstp, mdtp)(Login);