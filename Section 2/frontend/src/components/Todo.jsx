import React, { useState } from 'react'

const Todo = () => {

    const [todolist, setTodolist] = useState([]);

    const addNewTask = (e) => {
        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value);

            setTodolist( [ {text : e.target.value, completed: false}, ...todolist ] );
            console.log( [ {text : e.target.value, completed: false}, ...todolist ] );
            e.target.value = "";
        }
    }

    const deleteTodo = (index) => {
        console.log(index);
        const temp = todolist;
        temp.splice(index, 1);
        setTodolist([...temp]);
    }

    const completeTodo = (index) => {
        const temp = todolist;
        temp[index].completed = !temp[index].completed;
        setTodolist([...temp]);
        console.log(temp);
    }

  return (
    <div>
        <div className="container">

            <h2>To Do List</h2>
            <hr />

            <div className='card'>
                <div className='card-header'>
                    <input type="text" className='form-control' placeholder='Enter Task to Add' onKeyDown={addNewTask} />
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                    {todolist.map( (task, index) => { return <li className='border border-primary list-group-item d-flex justify-content-between align-items-center'>
                        <p>{task.text}</p>
                        { task.completed ? (
                            <span class="badge text-bg-success">Completed</span>
                        ) : (
                            <span class="badge text-bg-warning">Pending</span>
                        ) }
                        <div>
                            <button className='btn btn-primary' onClick={ () => { completeTodo(index) } } >Complete</button>
                            <button className='btn btn-danger ms-3' onClick={ () => { deleteTodo(index) } } >Delete</button>
                        </div>
                    </li> } )}
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Todo;