import React, { Component } from 'react'
                                                  
export default class NewsItems extends Component {

  setImageError = (e)=>{
    e.currentTarget.src = "default.jpg";
  }
  render(){
    let {title , description, imageUrl, newsUrl, date} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className={{ height: "10px"}} alt="..." onError={this.setImageError} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read full article</a>
                <div className="card-footer pt-3">  
                  <small className="text-muted">Updated on {new Date(date).toGMTString()} mins ago</small>   {/* bootstrap html for showing time*/} {/* new Date(date).toGMTString() it is a way to format the json time format*/}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
