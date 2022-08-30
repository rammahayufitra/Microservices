import React from 'react'

export default function BodyComponent(props) {
  return (
    <div>
        <h1>nama : {props.nama}</h1>
        <h1>age: {props.age()}</h1>
    </div>
  )
}
