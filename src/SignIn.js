import React from 'react'
import './SignIn.css'
import googleLogo from './google.svg'
import {auth, githubProvider, googleProvider} from './base'

const Signin = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return(
        <div className="SignIn">
            <header className="Header">
                <img src="media/quill.svg" alt=""/>
                <span className="title"></span>
            </header>
            <main>
            <h3>Welcome to Scribble!</h3>
            <p>The best place to keep track of what you need to get done and scribble down your notes</p>
            <button 
                className="github"
                onClick={() => authenticate(githubProvider)}
            >
                <i className="fab fa-github"></i>
                Sign in with GitHub
            </button>
            <button 
                className="google"
                onClick={() => authenticate(googleProvider)}
            >
                <img src={googleLogo} alt=""/>
                Sign in with Google
            </button>
         </main>
        </div> 
    )
}

export default Signin