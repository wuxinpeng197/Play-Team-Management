import React, { Component } from 'react';
import {validate} from '../../UI/tag';
// import Fade from 'react-reveal/Fade';
import { firebasePromotions } from '../../../firebase';
import {FormField} from '../../UI/fieldForm';

class Enroll extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }

    }

    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    resetFormSuccess(type){
        const newFormdata = {...this.state.formdata}

        for(let key in newFormdata){
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }

        this.setState({
            formError:false,
            formdata: newFormdata,
            formSuccess: type ? 'Congratulations' : 'Already on the database'
        });
        this.successMessage();
    }

    successMessage(){
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },2000)
    }


    submitForm(event){
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid){
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
            .then((snapshot)=>{
                if(snapshot.val() === null){
                    firebasePromotions.push(dataToSubmit);
                    this.resetFormSuccess(true);
                }else{
                    this.resetFormSuccess(false);
                }
            })
    
        } else {
            this.setState({
                formError: true
            })
        }
    }


    render() {
        return (
            
                <div className="enroll_wrapper">
                     <form onSubmit={ (event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email for enrollment
                        </div>
                            <div className="enroll_input">
                                <FormField
                                formdata={this.state.formdata.email}
                                id={'email'}
                                change={(element)=> this.updateForm(element)}
                                />
                                { this.state.formError ? 
                                <div className="error_label">Something is wrong, try again.</div>
                                :null
                                }
                                <div className="success_label">{this.state.formSuccess}</div>
                                    <button onClick={(event)=> this.submitForm(event)}>Enroll</button>
                               </div>
                    </form> 
                </div>
           
        );
    }
}

export default Enroll;