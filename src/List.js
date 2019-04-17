import React from 'react'
import "./NoteList.css"
import Note from './Note'

const List = (props) => {
    
    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
                { props.notes.map(note => <Note key={note.id} note={note} />)}
            </a>
            </ul>
        </div>
    )
}

export default List