import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

// // using if else conditions
// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button type="button">Login</button>
//     }
//     return <button type="button">Logout</button>
//   }

//   render() {
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// // using element variables
// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   render() {
//     const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn === true) {
//       authButton = <button>Login</button>
//     } else {
//       authButton = <button>Logout</button>
//     }
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {authButton}
//       </div>
//     )
//   }
// }

// // using ternary operator
// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   render() {
//     const {isLoggedIn} = this.state
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {isLoggedIn ? <button>Login</button> : <button>Logout</button>}
//       </div>
//     )
//   }
// }

// using logical && operator
class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
        {isLoggedIn && <button>Login</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}
export default App
