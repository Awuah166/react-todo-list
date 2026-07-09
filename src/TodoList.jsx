export function TodoList() {
    return (
        <ul className="list">
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
        </ul>
    )
}