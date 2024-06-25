import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalize(this.props.category)}- NewsMonk`;
  }

  async componentDidMount() {
    this.updateNews()
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1d298e1eabb48b1855bda547b443650&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  nextButton = async () => {
    this.setState({page : this.state.page + 1});
    this.updateNews();
  };
  prevButton = async () => {
    this.setState({page : this.state.page - 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px" }}>
          NewsMonkey- {this.capitalize(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) : "No title"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "No description"
                    }
                    NewsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-521264948.jpg?resize=1200,600"
                    }
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevButton}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextButton}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;