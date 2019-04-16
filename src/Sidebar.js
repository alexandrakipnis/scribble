import React from 'react'
//import { StyleSheet, css } from 'aphrodite'
import quill from './quill.svg'
import plusIcon from './new.png'
import plusHover from './new-hover.png'

const Sidebar = () => {
    return (
        <div classname="Sidebar" style={styles.sidebar}>
            <div classname="logo" style={styles.logo}>
                <img src={quill} alt='Scribble' style={styles.logoImg}/>
            </div>
            <a href='/notes' style={styles.newNote}>
                <img src={plusHover} alt='New Note' style={styles.newNoteImg}/> 
                <img src={plusIcon} alt='New Note' style={styles.newNoteImg}/> 
            </a>

            <div classname="signOut" style={styles.signOut}>
                <button style={styles.button}>
                    <i className = "fa fa-sign-out" style={styles.buttonIcon}>
                    </i> 
                </button>
            </div>

        </div>


    )
}

const styles = {
    sidebar: {
      width: '6rem',
      backgroundColor: '#f3f3f3',
      padding: '0.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      fontFamily: '"Fauna One"',
      color: '#666',
      fontSize: '3rem',
    },
    logoImg: {
      width: '3rem',
      paddingLeft: '0.4rem',
    },
    newNote: {
      marginTop: '2rem',
      position: 'relative',
      width: '4rem',
    },
    newNoteImg: {
      position: 'absolute',
      left: '0',
      width: '100%',
      transition: 'opacity 0.25s ease-in-out',
    },
    //newNoteImgHover: {
      //':hover': {
      //  opacity: 0,
      //s},
    //},
    signOut: {
      position: 'absolute',
      bottom: '1rem',
    },
    button: {
      backgroundColor: 'transparent',
      border: '0',
      color: '#008bf8',
      cursor: 'pointer',
      outline: 'none',
    },
    buttonIcon: {
      fontSize: '2rem',
    },
  }
export default Sidebar