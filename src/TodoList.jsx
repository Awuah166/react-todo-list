import { TodoItem } from "./TodoItem"

export function TodoList({ todo, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todo.length === 0 && "No todos" }
            {todo.map(todo => {
                 return (
                    <TodoItem 
                    id={todo.id} 
                    completed={todo.completed} 
                    title={todo.title} 
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
            //      <li key={todo.id}>
            //      <label>
            //          <input 
            //          type="checkbox" 
            //          checked={todo.completed} 
            //          // onChange={e => toggleTodo(todo.id, e.target.checked)} 
            //          />
            //          {todo.title}
            //      </label>
            //      <button //onClick={() => deleteTodo(todo.id)}
            //      className="btn btn-danger" >
            //          Delete
            //      </button>
            //  </li>
                 )
            })}
        </ul>
    )
}
