
import React, { Component } from 'react'
// import {a} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="favicon.ico" style={{ height: '45px', width: '45px' }} />
          <h1 className="mx-2">NewsTimes</h1>
        </div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '1px solid black', height: '60px' }}>
          <div className="container-fluid">
            <img src="favicon.ico" style={{ height: '45px', width: '45px' }} />

            <a className="navbar-brand fw-bold mx-2" href="/">NewsTimes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item "><a className="nav-link active " aria-current="page" href="/"><button type="button" className="btn btn-outline-white">Home</button></a></li>

                <li className="nav-item" ><a className="nav-link active" href="/business"><button type="button" className="btn btn-outline-white">Business</button></a></li>
                <li className="nav-item" ><a className="nav-link active" href="/entertainment"><button type="button" className="btn btn-outline-white">Entertainment</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/general"><button type="button" className="btn btn-outline-white">General</button></a></li>
                <li className="nav-item" ><a className="nav-link active" href="/health"><button type="button" className="btn btn-outline-white">Health</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/science"><button type="button" className="btn btn-outline-white">Science</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/sports"><button type="button" className="btn btn-outline-white">sports</button> </a></li>
                <li className="nav-item" ><a className="nav-link active" href="/technology"><button type="button" className="btn btn-outline-white">Technology</button> </a></li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar