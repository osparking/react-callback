import React from 'react'

const ShoppingItem = (props) => {
  return (
    <ul>
      <li>이름: {props.name}</li>
      <li>중량: {props.weight}</li>
      <li>가격: {props.price}</li>
      <li>색상: {props.color}</li>
    </ul>
  )
}

export default ShoppingItem