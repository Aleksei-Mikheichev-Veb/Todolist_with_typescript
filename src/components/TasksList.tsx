import React from 'react';
import {removeTaskAC, toggleCheckboxTaskAC} from "../state/taskReducer";
import EditableValue from "./EditableValue";
import {useActions} from "../hooks/useAction";
import {TaskType} from "./TodoList";
import {Checkbox, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";

type PropsType = {
    changeTask: (newValue:string, idTask:string) => void;
    id:string;
    taskToDisplay: Array<TaskType>;
}

const TasksList = (props:PropsType) => {
    const dispatch = useDispatch()
    const { toggleCheckboxTaskAC} = useActions()
    return (
        <div className="tasks">
            <ul className='item_list'>
                {props.taskToDisplay.map(task => {
                    const removeCurrentTask = () => {
                        dispatch(removeTaskAC(task.id, props.id))
                    }
                    const onHandleTask = () => {
                        toggleCheckboxTaskAC(task.id, props.id)
                    }
                    return <li key={task.id}  className={task.completed ? 'complete_task' : ''}>
                        <Checkbox  onChange={onHandleTask} checked={task.completed}/>
                        <EditableValue text={task.title} changeTask={props.changeTask} id={task.id}/>
                        <IconButton aria-label="delete" onClick={removeCurrentTask}>
                            <DeleteIcon />
                        </IconButton>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TasksList;