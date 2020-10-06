import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import API from "./utils/API";
// import { BookList, BookListItem } from "./components/BookList";
// import { Container, Row, Col } from "./components/Grid";

import Home from "./pages/Home/index";
import Saved from "./pages/Saved/index";
import NoMatchPage from "./pages/NoMatch";

function App() {

  // const [books, setBooks] = useState([]);
  // const [bookSearch, setBookSearch] = useState("");

  // // const componentDidMount() {
  // //   API.getBooks(bookSearch)
  // //   .then(res => setBooks(res.data))
  // //   .catch(err => console.log(err));
  // // }

  // // componentDidMount();

  // const handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { value } = event.target;
  //   setBookSearch(value);
  // };

  // const handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get book, update the book state
  //   event.preventDefault();

  //   API.getBooks(bookSearch)
  //     .then(res => setBooks(res.data))
  //     .catch(err => console.log(err));
  // };

  return (
    <div>
      {/* <Nav />
      <Jumbotron /> */}
      {/* <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.title}
                      title={book.title}
                      authors={book.authors}
                      href={book.href}
                      description={book.description}
                      thumbnail={book.thumbnail}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container> */}

      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route path="/404" component={NoMatchPage} />
              <Redirect to="/404" />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
