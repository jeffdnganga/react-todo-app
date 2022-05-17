import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button background='navy' color='white' text={showAdd ? 'Close' : 'Add Task'} onClick={ onAdd }/>
    </header>
  )
}

Header.defaultProps = {
    title: 'ToDo App',
}

export default Header