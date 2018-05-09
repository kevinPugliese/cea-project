import React from 'react';

export default props => (
    <div>
      <label>{props.label}</label>
      <div>
        <input {...props.input} type={props.type} />
        {props.meta.touched &&
          ((props.meta.error && <span>{props.meta.error}</span>) ||
            (props.meta.warning && <span>{props.meta.warning}</span>))}
      </div>
    </div>
)
