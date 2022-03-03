import PropTypes from 'prop-types'
import React from 'react'

export const ButtonBasic = ({text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className="btn">{text}</button>
        </div>
    )
}

ButtonBasic.defaultProps = {
    text: "Button"
}

ButtonBasic.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default ButtonBasic
