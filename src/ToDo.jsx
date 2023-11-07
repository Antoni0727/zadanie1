import { useState  } from "react";

const tasks = [
    {id:1, text:'Zadanie1', completed: false},
    {id:2, text:'Zadanie2', completed: true},
    {id:3, text:'Zadanie3', completed: false},
]

const ToDo = () =>{
    const [todos, setTodos] = useState(tasks);

    const removeTaskHandler = (taskId) =>{
        setTodos(
            todos.filter( task =>{
                return task.id !== taskId;
            })
        )
    }

    const addNewTaskHandler = () => {
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: "Zupełnie nowe zadanie",
            completed: false,
        }

        setTodos([...todos, newTask])
    }

    return(
        <div>
            <h1>Jestem ToDo</h1>
            <ul>
                {
                    todos.map( task => (
                        <li key={task.id}>{task.text}            
                        <button onClick={()=> removeTaskHandler(task.id)}>Usuń zadanie {task.id}</button></li>
                    ))
                }
            </ul>
            <button onClick={addNewTaskHandler}>Dodaj nowe zadanie</button>
        </div>
    );
}

export default ToDo;