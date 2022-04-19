import React, {Fragment} from 'react'
import { useState } from 'react'

import CreateTodo from './components/Todo/Create'
import ListTodos from './components/Todo/List'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Fragment>
     <div className="container">
        <CreateTodo />
        <br/>
        <ListTodos />
     </div>
    
    </Fragment>
  )
}

export default App
