import React, {Component} from 'react';

export default class extends Component {

  renderInput(isFile, input, type) {
    if (isFile) {
      return <input {...input} type={type} multiple onChange={
        ( e ) => {      
          e.preventDefault();
          const { fields } = this.props;
          // convert files to an array
          const files = [ ...e.target.files ];
          fields.yourField.handleChange(files);
        }}/>
    }
    return <input {...input} type={type} />
  }

  render() {
    const { input, type, isFile, label, meta: { error, warning, touched } } = this.props;
    return (
      <div>
      <label>{label}</label>
      <div>
        {this.renderInput(isFile, input, type)}
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
    )
  }
}
