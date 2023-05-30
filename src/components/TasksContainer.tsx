import styles from "./TasksContainer.module.css";
import ClipboardSvg from "../assets/Clipboard.svg";

import { Task, TaskEntity } from "./Task";

interface TasksContainerProps {
    tasks: TaskEntity[],
    onDeleteTask: (taskId: string) => void,
    onChangeTask: (task:TaskEntity) => void
}

export function TasksContainer({tasks, onDeleteTask, onChangeTask}: TasksContainerProps) {
    const numberOfTasks = tasks.length;
    const numberOfTasksDone = tasks.reduce((acc, task) => task.completed? acc + 1: acc, 0);

    return (
        <div className={styles.tasksContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.newTasksCounter}>
                    <span>Tarefas criadas</span>
                    <span>{numberOfTasks}</span>
                </div>

                <div className={styles.doneTasksCounter}>
                    <span>Concluídas</span>
                    <span>{numberOfTasks > 0 ? numberOfTasksDone + ' de ' + numberOfTasks: 0} </span>
                </div>
            </header>

            <main className={styles.mainTaskContainer}>
                {
                    tasks.length === 0 && 
                    <div className={styles.emptyTaskContainer}>
                        <img src={ClipboardSvg} alt="Clip board" />
                        <div className={styles.informativeMessage}>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                }

                { 
                    tasks.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                task={task} 
                                onDeleteTask={onDeleteTask}
                                onChangeTask={onChangeTask}
                            />
                        )    
                    })
                }
                
            </main>
        </div>
    );
}