import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState ('')
    // const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, reminder })

        setText('')
        // setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input className="form-control" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        {/* <div className="mb-3">
            <label className="form-label">Day and Time</label>
            <input className="form-control" type="date" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div> */}
        <input type="submit" value="Save Task" className="save-btn btn-block" />
    </form>
  )
}

export default AddTask