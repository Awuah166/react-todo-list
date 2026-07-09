import { useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
    // const [newItem, setNewItem] = useState("")
    const [todo, setTodo] = useState([])

    function addTodo(title) {
        setTodo(currentTodo => {
            return [
                ...currentTodo,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        })
    }
    
    // function handleSubmit(e){
    //     e.preventDefault()
    //     //Handle new item submission logic here

    //     setTodo((currentTodo) => {
    //         return  [...currentTodo, { id: crypto.randomUUID(), title: 
    //         newItem, completed: false },
    //       ]
    //     })

    //     setNewItem("")
    // }

    function toggleTodo(id, completed) {
        setTodo(currentTodo => {
            return currentTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodo(currentTodo => {
            return currentTodo.filter(todo => todo.id !== id)
        })
    }

 return (
    <>
        <NewTodoForm onSubmit={addTodo}/>

        <h1 className="header">My Todo List</h1>
        {/* <ul className="list">
            {todo.length === 0 && "No todos" }
            {todo.map(todo => {
                return <li key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.completed} 
                    onChange={e => toggleTodo(todo.id, e.target.checked)} />
                    {todo.title}
                </label>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </li>
            })}
        </ul> */}
        <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
 </>
 )
}
