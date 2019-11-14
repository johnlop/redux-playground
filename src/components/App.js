import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Users</Link>
        {" - "}
        <Link to="/albums">Albums</Link>
      </div>
      <Route exact path="/users" component={Users}></Route>
      <Route exact path="/user/:id" component={User}></Route>
      <Route exact path="/albums" component={Albums}></Route>
      <Redirect path="/" to="/users"></Redirect>
    </BrowserRouter>
  );
}

export default App;
