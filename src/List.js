import React from 'react'
import "./NoteList.css"
import Note from './Note'

const List = ({notes, setCurrentNote, removeCurrentNote, resetCurrentNote}) => {
    
    return(
        <div className="NoteList">
          <h3>To Do: </h3>
          <ul id="notes">
            {/* <a className="active"> */}
                { notes.map(note => 
                    <Note 
                        key={note.id} 
                        note={note} 
                        setCurrentNote={setCurrentNote}
                        removeCurrentNote={removeCurrentNote}
                    /> 
                )}
            {/* </a> */}
          </ul>
        </div>

    )
}

export default List