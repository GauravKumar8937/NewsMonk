import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, NewsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ zIndex: 1 }}
            >
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Author : {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link to={NewsUrl} target="_black" className="btn btn-sm btn-dark">
              Read more...
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
