import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState (true)
  const [tasks, setTasks] = useState (
    [
        {
            id: 1,
            text: 'Meeting in Westlands',
            day: 'May 14th at 9:00am',
            reminder: true,
        }, 
        {
            id: 2,
            text: 'Dental check-up appointment',
            day: 'May 16th at 10:00am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'May 18th at 2:00pm',
            reminder: false,
        }
    ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([ ...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show.'}

    </div>
  );
}

export default App;
