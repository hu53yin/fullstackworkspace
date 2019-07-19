import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a class="left brand-logo">Emaily</a>
          <ul class="right">
            <li>
              <a href="sass.html">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
