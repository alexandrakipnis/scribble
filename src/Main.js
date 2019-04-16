import React from 'react'

import Form from './Form'
import List from './List'
import Sidebar from './Sidebar'

const Main = () => {
    return (
        <div classname ="Main" style={style}>
            <Sidebar />
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
