import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editNote } from '../actions';

class EditNote extends Component {
    renderField(field) {
        // nested obj destructure, pulling the touched and error props 
        const { meta: { touched, error } } = field;
        // ternary operator to determine className for validation styling 
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    textarea rows="4" cols="50"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmitEdit(values) {
       
        if(this.props.location.pathname[10] && !this.props.location.pathname[11]){
            values.id = this.props.location.pathname[10];
            this.props.editNote(values, () => {
                this.props.history.push('/')
            })
        }
 
        if (this.props.loaction.pathname[10] && this.props.location.pathname[11] && !this.props.location.pathname[12]){
        values.id = this.props.location.pathname[10] + this.props.location.pathname[11];
        this.props.editNote(values, () => {
        this.props.history.push('/')
    })
}
    
    }

    render() {

        // handleSubmit prop inherited from redux-form 
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmitEdit.bind(this))}>
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
                <div className="body-text-area">
                    <Field
                        label="Body"
                        name="body"
                        component={this.renderField}

                    />
                </div>
                <button type="submit" className="btn btn-primary submit-button" >Submit The Edit</button>
                <Link to="/" className="btn float-right btn-danger cancel-button">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    let errors = {};
    // validate the Field inputs

    if (!values.title) {
        errors.title = "Enter a title!"
    }
    if (!values.category) {
        errors.category = "Please enter a category"
    }
    if (!values.body) {
        errors.body = "Don't you want to write something?"
    }


    // if errors obj is empty, form ready to submit 
    return errors;
}

export default reduxForm({
    validate,
    form: 'EditNoteForm'
})(
    connect(null, { editNote })(EditNote)
    );

