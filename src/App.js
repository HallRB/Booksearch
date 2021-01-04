import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Results from "./Results";
import Search from "./Search";
import Wrapper from "./Wrapper";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {
 

    render() {
      return (
        <Router>
          <div>
            <NavBar />
            <Header />
            <Wrapper>
              <Route exact path="/" Component={Search} />
              <Route exact path="/search" Component={Search} />
              <Route exact path="/saved" Component={Saved} />
              <Route exact path="/noMatch" Component={NoMatch} />
            </Wrapper>
          </div>
        </Router>
      )
    };
  };
  
  export default App;