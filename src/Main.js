import React from 'react'

import Form from './Form'
import List from './List'
import Sidebar from './Sidebar'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: {
                id: null,
                title: '',
                body: '',
            },
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

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    render() {
        return (
            <div classname ="Main" style={style}>
                <Sidebar />
                <List 
                    notes={this.state.notes} 
                    setCurrentNote={this.setCurrentNote}
                />
                <Form currentNote={this.state.currentNote}/>
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
