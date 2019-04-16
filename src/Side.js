import React from 'react'
import quill from './quill.svg'
import plusIcon from './new.png'
import plusHover from './new-hover.png'

const Side = () => {
    return (
        <div classname="Side">
            <div classname="logo">
                <img src={quill} alt='Scribble'/>
            </div>
            <a href='/notes'>
                <img src={plusHover} alt='New Note'/> 
                <img src={plusIcon} alt='New Note'/> 
            </a>

            <div classname="signOut">
                <button>
                    <i className = "fa fa-sign-out">
                    </i>
                </button>
            </div>

        </div>


    )
}

export default Side