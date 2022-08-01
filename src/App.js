import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 3th at 09:30am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Swimming lesson',
      day: 'Feb 7th at 12:30pm',
      reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
