import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
//import LabelInput from './loginInput';
//import Homepage from './Homepage';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Category from './pages/Category.js';
import Categories from './pages/Categories.js';
import MainNav from './components/Navbar.js'; 
import SpotifyCallback from './pages/SpotifyCallback'; 
import Playlists from './pages/Playlists';
import Tracks from './pages/Tracks'; 
import Home from './pages/Home';





// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 'login',
//       isLoggedIn: false,
//     }
//   }

//   handleLogin = () => {
//     this.setState({
//       currentPage: 'homepage'
//     });
//   }

//   render() {
//     if(this.state.currentPage === 'login') {
//       return (
//         <div>
//           <LabelInput label = "username" defaultValue = "Default"/>
//           <LabelInput label = 'pulsername' />
//           <button className="button" onClick={this.handleLogin}>Login</button>
//         </div>
//       );
//     }

function App() {

  return (
    <div className="App">
     
        <main>
          <Switch>
          <Route 
                path="/navbar" 
                component={MainNav}
          />
            <Route 
              path="/home" 
              component={Home}
            />
            <Route 
              path="/about" 
              component={About}
            />
            <Route 
              path="/login" 
              component={Login}
            />

            <Route
              path="/callback"
              component={SpotifyCallback}
            />
            <Route
              path="/categories"
              exact 
              component={Categories}
            />

            <Route
              path="/category"
              component={Category}
            />

            <Route
              path="/tracks/:id"
              component={Tracks}
            />

            <Route
              path="/playlists/:id"
              component={Playlists}
            />

            </Switch>

</main>
    </div>
  );
}
          
          {/* <Switch>
          <Route path="/" 
                 exact
                 render={ () => (<div>Home page</div>)}
          />
           <Route path="/about" 
                  component={About}
          />

          <Route path="/login" 
                  component={Login}
          />
          <Route path="/categories" 
                  component={Category}
          />
          </Switch> */}
        

export default App;

    // return (
    //   <div>
    //   <Homepage class = "altaclasa" icon ="Icon" description = "At home"/>
    //   <Homepage icon ="Icoana" description = "Party"/>
    //   <Homepage icon ="Iconita" description = "Mood"/>
    //   <Homepage icon ="Icon" description = "At home"/>
    //   <Homepage icon ="Icoana" description = "Party"/>
    //   <Homepage icon ="Iconita" description = "Mood"/>
    //   </div>
    // );

  // function App() {

//   const learnReactDescription = "Learn React from Scoala IT";
//   const reactTutorialUrl = "https://www.w3schools.com/react/";
//   const getGithubProfile = () => "https://github.com/mihai-giurgiu";
//   return <Homepage />

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p onClick={() => {console.log("I was clicked");}}>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href={getGithubProfile()}
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         My github
//   //       </a>
//   //       <LabelInput
//   //       id = "client-id"
//   //       label ="client-id"
//   //       placeholder = "Client ID placeholder"
//   //       value = ""
//   //       //eventHandler
//   //       //how to create components in react
//   //       //header
//   //       />
//   //       <button className="button" onClick={() => {console.log("I was clicked again");}}></button>
//   //       <div>
//   //         { getGithubProfile() }
//         // </div>
//        // <Homepage>
//       {/* </header>
      
//     </div>
//   ); */}
// }


