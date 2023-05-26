import styles from "./TasksContainer.module.css";
import ClipboardSvg from "../assets/Clipboard.svg";

export function TasksContainer() {
    return (
        <div className={styles.tasksContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.newTasksCounter}>
                    <span>Tarefas criadas</span>
                    <span>0</span>
                </div>

                <div className={styles.doneTasksCounter}>
                    <span>Concluídas</span>
                    <span>0</span>
                </div>
            </header>

            <main className={styles.mainTaskContainer}>
                <img src={ClipboardSvg} alt="Clip board" />
                <div className={styles.informativeMessage}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </main>
        </div>
    );
}