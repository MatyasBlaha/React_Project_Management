import { useState } from "react";

import Input from "./Input.jsx";
import Button from "./Button.jsx";

export default function NewTasks({ onAdd, onDelete }){
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        onAdd(enteredTask)
        setEnteredTask('');
    }

    return(
        <div className='flex items-center gap-4'>
            <Input
                type='text'
                onChange={handleChange}
                value={enteredTask}
            />
            <Button
                onClick={handleClick}
            >
                Add Task
            </Button>
        </div>
    )
}