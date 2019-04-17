import React from 'react'

import Form from './Form'
import List from './List'
import Sidebar from './Sidebar'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [
                {
                    id: 1,
                    title: 'Why I <3 JS',
                    body: 'Because I like code, and JS is code.',
                },
                {
                    id: 2,
                    title: 'Thoughts on breakfast',
                    body: 'I love it!',
                },
                {
                    id: 3,
                    title: 'Watching the first episode of Black Mirror with your parents',
                    body: 'Don\'t.',
                },
            ]
        }
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

    render() {
        return (
            <div classname ="Main" style={style}>
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                />
                <List 
                    notes={this.state.notes} 
                    setCurrentNote={this.setCurrentNote}
                />
                <Form 
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
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
