import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './VideoForm.css'

class VideoForm extends React.Component {
  renderInput = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <input {...input} placeholder={label} type={type} autoComplete="off" />
        {touched && error && <small>{error}</small>}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
    this.props.reset()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="searchTerm"
            type="text"
            component={this.renderInput}
            label="Search"
          ></Field>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.searchTerm) {
    errors.searchTerm = ' '
  }

  return errors
}

export default reduxForm({ form: 'videoform', validate })(VideoForm)
