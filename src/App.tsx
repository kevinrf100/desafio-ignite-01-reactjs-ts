import { useState } from "react";
import { Header } from "./components/Header"
import { TaskEntity } from "./components/Task";
import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { TasksContainer } from "./components/TasksContainer";

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  function onCreateNewTask(task: TaskEntity) {
    setTasks([...tasks, task]);
  }

  function onDeleteTask(taskContent: string) {
    const filteredTasks = tasks.filter((task) => task.content !== taskContent);
    setTasks(filteredTasks);
  }

  function onChangeTask(changedTask: TaskEntity) {
    const replaceTaskEntity = tasks.map((task) => task.id === changedTask.id? changedTask: task);
    setTasks(replaceTaskEntity);
  }

  return (
    <>
      <Header/>

      <main className={styles.mainContainer}>

        <CreateNewTaskForm onCreateNewTask={onCreateNewTask}/>

        <TasksContainer tasks={tasks} onDeleteTask={onDeleteTask} onChangeTask={onChangeTask}/>

      </main>
    </>
  )
}

export default App
