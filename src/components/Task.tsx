import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskEntity {
    content: string,
    completed: boolean,
    id: string
}

interface TaskProps {
    task: TaskEntity
    onDeleteTask: (taskContent: string) => void
    onChangeTask: (task: TaskEntity) => void
}

export function Task({task, onDeleteTask, onChangeTask}: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleChangeCheckboxValue() {
        const changedTask = {...task, completed: !task.completed}
        onChangeTask(changedTask);
    }

    return (
        <article className={styles.taskContainer}>
            <input type="checkbox" checked={task.completed} onChange={handleChangeCheckboxValue}/>
            <span className={styles.taskContent}>{task.content}</span>
            <button className={styles.deleteButton} onClick={handleDeleteTask}>
                <Trash className={styles.trashIcon}/>
            </button>
        </article>
    );
}