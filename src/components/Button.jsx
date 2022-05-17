import PropTypes from 'prop-types'

const Button = ({ color, background, text, onClick }) => {
    return (    
        <button style={{ backgroundColor: background, color: color }} className='btn' onClick={onClick}>{ text }</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button