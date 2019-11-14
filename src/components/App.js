import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import User from "./pages/User";
import Loading from "./shared/Loading";

function App() {
  return (
    <>
      <Loading />
      <BrowserRouter>
        <div>
          <Link to="/users">Users</Link>
          {" - "}
          <Link to="/albums">Albums</Link>
        </div>
        <Route exact path="/users" component={Users}></Route>
        <Route path="/user/:id" component={User}></Route>
        <Route exact path="/albums" component={Albums}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
