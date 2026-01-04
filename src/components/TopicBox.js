import React from 'react'
import './topicbox.css'

// export default function TopicBox() {
 /* const topic = "My favourite food is Kottu"
 const item = " and Rice" */

//  const a = 10;
//  const b = 20;
//  const c = a+b;
//props method
export default function TopicBox(props) {
  return (
    /*<div>
        <div className="topicBox">
            <span className="text">{topic} {item}</span>
        </div>
    </div> */
    <div>
        <div className="topicBox">
            <span className="text">my favorite food is {props.food} the price is {props.price} </span>
            {props.children}
        </div>
    </div>
  )
}

