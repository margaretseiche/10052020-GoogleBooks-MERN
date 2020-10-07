import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query } });

  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  searchTerms: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
    );
  }
};

// https://www.googleapis.com/books/v1/volumes?q=quilting
