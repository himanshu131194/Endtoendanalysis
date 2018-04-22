import React, { Component } from 'react';

class Header extends Component{
   render(){
      return(
        <nav>
            <div className="nav-wrapper">
              <ul className="left hide-on-med-and-down">
                <li><a href="sass.html">Create Test</a></li>
                <li className="active"><a href="/add-questions">Add Questions</a></li>
                <li><a href="/">Check Result</a></li>
              </ul>
            </div>
      </nav>
      )
   }
}

export default Header;
