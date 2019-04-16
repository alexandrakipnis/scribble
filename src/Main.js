import React from 'react'

import Form from './Form'
import List from './List'
import Side from './Side'

const Main = () => {
    return (
        <div classname ="Main" style={style}>
            <Side />
            <List />
            <Form />
        </div>
    )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',   
}

export default Main
