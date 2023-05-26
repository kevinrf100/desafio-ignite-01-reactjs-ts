import styles from "./CreateNewTaskForm.module.css";
import plusIcon from "../assets/plus.svg";

export function CreateNewTaskForm() {
    return (
        <form className={styles.createNewTaskForm}>
          <input className={styles.createTaskInput} placeholder="Adicione uma nova tarefa"/>
          <button className={styles.createTaskButton}>
            Criar
            <img src={plusIcon} alt="Add icon" />
          </button>
        </form>
    );
}