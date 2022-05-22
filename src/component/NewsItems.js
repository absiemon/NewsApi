import React, { Component } from 'react'
                                                  
export default class NewsItems extends Component {
  render(){
    let {title , description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className={{ height: "10px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read full article</a>
            </div>
        </div>
      </div>
    )
  }
}
