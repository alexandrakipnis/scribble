import React from 'react'
import './Note.css'
// import Main from './Main'

const Note = ({note, setCurrentNote, removeCurrentNote}) => {
    return (
        <li 
            className="Note"
            onClick={() => setCurrentNote(note)}
        >
            <div className="note">
                <div className="list-actions">
                    <button 
                        type="button"
                        onClick={removeCurrentNote}
                    >
                        <i class="far fa-check-circle"></i>

                    </button>

                </div>
                <div className="note-title">
                    { note.title }
                </div>

                <div class="note-body">
                    <p>
                        { note.body }
                    </p>
                </div>
            </div>
            
        </li>
    )
}

export default Note