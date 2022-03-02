import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.styles.scss';

class Signup extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


    render(){
        const { displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' />
                <FormInput name='email' type='email' formhandleChange={this.handleChange} value={this.state.email} label='Email' required />
                <FormInput name='password' type='password'  formhandleChange={this.handleChange} value={this.state.password} label='Password' required />
                </form>
            
            </div>

        )
    }
}