import React from 'react'
import "./NoteList.css"
import Note from './Note'

const List = () => {
    const notes = [1, 2, 3]
    
    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
                { notes.map(note => <Note />)}
            </a>
        </ul>
    </div>
    )
}

export default List