import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import quill from './quill.svg'
import plusIcon from './new.png'
import plusHover from './new-hover.png'

const Sidebar = () => {
  
      return (
          <div className={css(styles.sidebar)} >
              <div className={css(styles.logo)} >
                  <img 
                    src={quill} 
                    alt='Scribble' 
                    className={css(styles.logoImg)}
                  />
              </div>
              <a 
                href='/notes' 
                className={css(styles.newNote)} 
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
                  <button className={css(styles.button)}>
                      <i className={`fa fa-sign-out ${css(styles.buttonIcon)}`}> </i> 
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
      position: 'relative',
      width: '4rem',
    },
    newNoteImg: {
      position: 'absolute',
      left: '0',
      width: '100%',
      transition: 'opacity 0.25s ease-in-out',
    },
    newNoteImgHover: {
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
      color: '#008bf8',
      cursor: 'pointer',
      outline: 'none',
    },
    buttonIcon: {
      fontSize: '2rem',
    },
  })
export default Sidebar