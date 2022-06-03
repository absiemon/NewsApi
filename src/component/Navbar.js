
import React, { Component } from 'react'
// import {a} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsTimes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item "><a className="nav-link active " aria-current="page" href="/"><button type="button" className="btn btn-outline-dark">Home</button></a></li>
                
                <li className="nav-item" ><a className="nav-link active" href="/business"><button type="button" className="btn btn-outline-dark">Business</button></a></li>
                <li className="nav-item" ><a className="nav-link active" href="/entertainment"><button type="button" className="btn btn-outline-dark">Entertainment</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/general"><button type="button" className="btn btn-outline-dark">General</button></a></li>
                <li className="nav-item" ><a className="nav-link active" href="/health"><button type="button" className="btn btn-outline-dark">Health</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/science"><button type="button" className="btn btn-outline-dark">Science</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/sports"><button type="button" className="btn btn-outline-dark">sports</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/technology"><button type="button" className="btn btn-outline-dark">Technology</button> </a></li>  
                
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </div>
    )
  }
}

export default Navbar