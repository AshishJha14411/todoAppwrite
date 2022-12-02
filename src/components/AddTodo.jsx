import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { databases } from '../appwrite/appwriteConfig'
const AddTodo = () => {

  const [todos, setTodo] = userState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const promise = databases.createDocument("6389e334af481ba13d9c", uuidv4(), {
      todos
    })
    promise.then(
      function(res){
        console.log(res)
      },
      function(error){
        console.log(error)
      }
    )
  }
  return (
    <div>AddTodo</div>
  )
}

export default AddTodo