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
           </div>
       )
    }

    render(){
        return(
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
        )
    }
}

export default reduxForm({
    form: 'NewNoteForm'
})(PostNote);

