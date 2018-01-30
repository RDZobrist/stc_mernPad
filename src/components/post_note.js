import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNote extends Component {
    renderField(field){
       return(
           <div className="form-group">
           <label>{field.label}</label>
               <input
               type="text"
               className="form-control"
               {...field.input}
               />
               {field.meta.error}
           </div>
       )
    }

    render(){
        return(
        <div className="container">
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                    <Field
                        label="Category"
                        name="category"
                        component={this.renderField}
                    />
                    <Field
                        label="Body"
                        name="body"
                        component={this.renderField}
                    />
            </form>
        </div>
        )
    }
}

function validateInput(values) {
    const errors = {};
    // validate the Field inputs

    if(!values.title){
        errors.title = "Enter a title!"
    }
     if (!values.category) {
        errors.category = "Please enter a category"
    } 
    if (!values.body) {
        errors.body = "Aren't you going to write something?"
    } 
    if (values.body.length < 10) {
        errors.body = "Please write a little more ..."
    }
    
    // if errors obj is empty, form ready to submit 
    return errors;
}

export default reduxForm({
    validateInput,
    form: 'NewNoteForm'
})(PostNote);

