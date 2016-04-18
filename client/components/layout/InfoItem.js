import React from 'react';
import s from './main.css';
export default (props) => {
  return (
    <div className="col-md-4">
      <i className={props.classname +  " glyphicon icon"}></i>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
