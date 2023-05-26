import { Header } from "./components/Header"
import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { TasksContainer } from "./components/TasksContainer";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header/>
      <main className={styles.mainContainer}>
        <CreateNewTaskForm/>
        <TasksContainer/>
      </main>
    </>
  )
}

export default App
