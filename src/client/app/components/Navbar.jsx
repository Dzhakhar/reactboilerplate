import React from "react";
import {Link} from "react-router";

class Navbar extends React.Component {
  render(){
    return <div><Link to="/">Home</Link></div>
  }
}

exports.Navbar = Navbar;
