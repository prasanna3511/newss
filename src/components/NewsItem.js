import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description , imageUrl ,newsUrl} = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/303b3b701ab97ee00ab87508ca1d260a.jpg":imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
              read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
