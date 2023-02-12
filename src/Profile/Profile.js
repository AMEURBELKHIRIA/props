import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      Iam {props.FullName}{props.Bio}{props.Profesion}
     <img src={props.children}></img>
     <button onClick={()=>props.fct(props.FullName)}>click</button>
    </div>
  )
}

Profile.defaultProps={
    FullName:"kHALED"
}
Profile.propTypes={
FullName:PropTypes.string,

}
export default Profile