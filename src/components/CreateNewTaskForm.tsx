import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import { TaskEntity } from "./Task";
import {v4 as uuidv4} from "uuid";
import { PlusCircle } from "phosphor-react";

import styles from "./CreateNewTaskForm.module.css";

interface CreateNewTaskFormProps {
  onCreateNewTask: (task: TaskEntity) => void,
}

export function CreateNewTaskForm({onCreateNewTask}: CreateNewTaskFormProps) {
  const [taskContent, setTaskContent] = useState("");

    function handleCreateNewTask(event: FormEvent) {
      event.preventDefault();
      const newTask: TaskEntity = {
        content: taskContent,
        completed: false,
        id: uuidv4()
      }
      onCreateNewTask(newTask);
      setTaskContent("");
    }

    function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
      event.target.setCustomValidity('');
      setTaskContent(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
      event.target.setCustomValidity('Esse campo é obrigatório');
    }

    return (
        <form className={styles.createNewTaskForm}  onSubmit={handleCreateNewTask}>
          <input 
            className={styles.createTaskInput} 
            placeholder="Adicione uma nova tarefa"
            value={taskContent}
            onChange={handleTaskContentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <button className={styles.createTaskButton} type="submit">
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>
    );
}