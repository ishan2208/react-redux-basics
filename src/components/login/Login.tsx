import * as React from 'react';
import './Login.css';
import { userLogin } from '../../actions/user-login';

import { connect } from 'react-redux';

interface IUserLoginFormProps {
    email?: string;
    password?: string;
    userLogin: (email: string, password: string) => void;
}

interface IUserLoginFormState {
    user: {
        email: string;
        password: string;
    };
    isErrorOccurred: boolean;
    isLoginSuccessful: boolean;
}

class Login extends React.Component<IUserLoginFormProps, IUserLoginFormState> {
    constructor(props: IUserLoginFormProps) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            isErrorOccurred: false,
            isLoginSuccessful: false,
        };
    }

    handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    onClick = () => this.props.userLogin(this.state.user.email, this.state.user.password)
    render() {
        return (
            <div className="box">
                <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange} className="email"/><br/><br/>
                <input type="password" name="password" value={this.state.user.password} onChange={this.handleChange} className="pwd"/><br/><br/>
                <button type='button' name='submit' onClick={this.onClick}>Submit</button>

                {this.state.isErrorOccurred && !this.state.isLoginSuccessful ? 'Login Failed' : ''}
                {!this.state.isErrorOccurred && this.state.isLoginSuccessful ? 'Login Success' : ''}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user.user,
})

const mapDispatchToProps = (dispatch: any) => ({
    userLogin: (email: string, password: string) => userLogin(email, password)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);