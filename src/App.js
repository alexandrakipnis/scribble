import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import {auth} from './base'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount() {
    const uid = localStorage.getItem('uid')
    if(uid){
      this.setState({uid})
    }
    auth.onAuthStateChanged((user) => {
      if(user){
        this.handleAuth(user)
      }else{
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({uid: user.uid})
    localStorage.setItem('uid', user.uid)
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({uid: null})
    auth.signOut()
    localStorage.removeItem('uid')
  }

  render() {
    return (
      <div classname="App">
      {
        this.signedIn() 
          ? <Main signOut={this.signOut} uid={this.state.uid}/> 
          : <SignIn handleAuth={this.handleAuth}/>
      }
      </div>
    )
  }
}

export default App
