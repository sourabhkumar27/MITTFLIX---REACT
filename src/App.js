import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";

export default class App extends Component {
  baseURL = "https://api.themoviedb.org/3/search/movie/";
  APIKey = "7b725a71f3bdc8085f5696da7ab54025";
  URLparams = `&language=en-US&page=1&include_adult=false&query=`;
  url = `${this.baseURL}?api_key=${this.APIKey}${this.URLparams}`;
  state = {
    movies: [],
    likes: [],
  };

  queryMovies = (queryStr) => {
    fetch(this.url + queryStr)
      .then((result) => result.json())
      .then((data) => this.setState({ movies: data.results }));
  };

  handleSearch = (queryStr) => {
    if (queryStr !== undefined && queryStr !== null && queryStr !== "") {
      this.queryMovies(queryStr);
    } else {
      this.setState({ movies: [] });
    }
  };

  handleLikeMovie = (id) => {
    const index = this.state.likes.indexOf(id);

    if (index === -1) {
      this.setState({
        likes: [...this.state.likes, id],
      });
    } else {
      this.setState({
        likes: [...this.state.likes.filter((item) => item !== id)],
      });
    }
  };

  render() {
    return (
      <>
        <Header handleSearch={this.handleSearch} />
        {this.state.movies.length > 0 && (
          <MovieContainer
            handleLikeMovie={this.handleLikeMovie}
            likes={this.state.likes}
            movies={this.state.movies}
          />
        )}
      </>
    );
  }
}
