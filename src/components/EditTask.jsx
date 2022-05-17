import { useState } from "react"

const EditTask = ({ theTask }) => {

    // const id = theTask.id

    // const [text, setText] = useState(theTask.text)

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     if(!text) {
    //         alert('Please add a task')
    //         return
    //     }

    //     onAdd({ text, reminder })

    //     setText('')
    //     // setDay('')
    //     setReminder(false)
    // }


  return (
    <div>
    <form className="add-form">
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input className="form-control" type="text" placeholder=""/>
        </div>
        <input type="submit" value="Update Task" className="save-btn btn-block" />
    </form>

    </div>
  )
}

export default EditTask