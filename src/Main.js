import React from 'react'

import Form from './Form'
import List from './List'
import Sidebar from './Sidebar'
// import Note from './Note'
import base from './base'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: []
        }
    }

    componentWillMount() {
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        })
    }

    blankNote = () => {
        return { 
            id: null,
            title: '',
            body: '',
        }
    }

    

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if(!note.id){
            //new note
            note.id = Date.now()
            notes.push(note)
        }else{
            //existing notes
            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        }
        this.setState({notes})
        this.setCurrentNote(note)

        
    }

    removeCurrentNote = () => {
        const notes = [...this.state.notes]
        const i = notes.findIndex(note => note.id === this.state.currentNote.id)
        if(i > -1){
            notes.splice(i, 1)
            this.setState({notes})
        }
        this.resetCurrentNote()
    }



    render() {
        return (
            <div classname ="Main" style={style}>
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                    signOut={this.props.signOut}
                />
                <List 
                    notes={this.state.notes} 
                    setCurrentNote={this.setCurrentNote}
                    removeCurrentNote={this.removeCurrentNote}
                    resetCurrentNote={this.resetCurrentNote}
                />
                <Form 
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
                    removeCurrentNote={this.removeCurrentNote}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',   
}

export default Main
