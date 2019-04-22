import React from 'react'
import "./NoteList.css"
import Note from './Note'

const List = ({notes, setCurrentNote, removeCurrentNote}) => {
    
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
                    /> 
                )}
            {/* </a> */}
          </ul>
        </div>
    )
}

export default List