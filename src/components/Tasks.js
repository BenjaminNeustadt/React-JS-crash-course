import { useState } from 'react'


const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks

