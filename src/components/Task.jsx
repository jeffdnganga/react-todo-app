import { FaTrash, FaCheck, FaEdit } from 'react-icons/fa'
import Button from './Button'
import { Modal } from 'react-bootstrap' 
import { useState } from "react"
import EditTask from './EditTask'

const Task = ({ task, onDelete, onToggle }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h4>{task.text}</h4>
      <div className='row text-center'>
        <div className='col-4'>
        <FaCheck className='task-icon' style={{ color: 'green'}} onClick={() => onToggle(task.id)}/>        
        </div>
        <div className='col-4'>
          <FaTrash className='task-icon' style={{ color: 'red'}} onClick={() => onDelete(task.id)}/>        
        </div>
        <div className='col-4'>
          <FaEdit className='task-icon' style={{ color: 'blue'}} onClick={handleShow}/>
        </div>
      </div>
      <Modal show={show}>
      <Modal.Header><h4>Edit Task</h4></Modal.Header>
      <Modal.Body>
        <EditTask thetask={task}/>
      </Modal.Body>
      <Modal.Footer>
        <Button background='grey' color='black' text={'Cancel'} onClick={handleClose}/>
      </Modal.Footer>
      </Modal>
</div> 
  )
}

export default Task