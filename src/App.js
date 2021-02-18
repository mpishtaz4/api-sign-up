import "./App.css";
import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SearchPage from "./components/Search/SearchPage";
import FavoritesPage from "./components/Favorites/FavoritesPage";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>

          <nav className="menu">
            <NavLink
              to="/login"
              className="link text-center"
              activeClassName="active-link"
            >
              Login
            </NavLink>
            <NavLink
              to="/search"
              className="link text-center"
              activeClassName="active-link"
            >
              Search
            </NavLink>
            <NavLink
              to="/favorites"
              className="link text-center"
              activeClassName="active-link"
            >
              Favorites
            </NavLink>
          </nav>
          <main className="main-container">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route path="*">
                <Redirect to="/search" />
              </Route>
            </Switch>
          </main>
          <footer className="footer">
            <h3 className="text-center">Gif Search Inc.</h3>
          </footer>
        </>
      </Router>
    </Provider>
  );
}

export default App;
