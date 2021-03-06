import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import scrib from './scribbleicon.ico'
import plusIcon from './new.png'
import plusHover from './new-hover.png'

const Sidebar = ({resetCurrentNote, signOut}) => {
  
      return (
          <div className={css(styles.sidebar)} >
              <div className={css(styles.logo)} >
                  <img 
                    src={scrib} 
                    alt='Scribble' 
                    className={css(styles.logoImg)}
                  />
              </div>
              <a 
                href='/notes' 
                className={css(styles.newNote)}
                onClick={(ev) => {
                  ev.preventDefault()
                  resetCurrentNote()
                }} 
              >
                  <img 
                    src={plusHover} 
                    alt='New Note' 
                    className={css(styles.newNoteImg)}
                  /> 
                  <img 
                    src={plusIcon} 
                    alt='New Note' 
                    className={css(styles.newNoteImg, styles.newNoteImgHover)}
                  /> 
              </a>

              <div className={css(styles.signOut)} >
                  <button 
                    className={css(styles.button)}
                    onClick={signOut}
                  >
                      <i 
                        className={`fas fa-sign-out-alt ${css(styles.buttonIcon)}`}
                        title="sign out"
                      > </i> 
                  </button>
              </div>

          </div>


      )
}

const styles =  StyleSheet.create({
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
      color: '#FECB9D',
      position: 'relative',
      width: '4rem',
    },
    newNoteImg: {
      position: 'absolute',
      color: '#FECB9D',
      left: '0',
      width: '100%',
      transition: 'opacity 0.25s ease-in-out',
    },
    newNoteImgHover: {
      color: '#FECB9D',
      ':hover': {
       opacity: 0,
      },
    },
    signOut: {
      position: 'absolute',
      bottom: '1rem',
    },
    button: {
      backgroundColor: 'transparent',
      border: '0',
      color: '#FECB9D',
      cursor: 'pointer',
      outline: 'none',
    },
    buttonIcon: {
      fontSize: '2rem',
      color: '#FECB9D'
    },
  })
export default Sidebar