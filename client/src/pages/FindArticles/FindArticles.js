import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../pages/Search";
import Results from "../../pages/Results";
import { Link } from "react-router-dom";

class FindArticles extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
    startYear: "",
    endYear: ""
  };

  loadArticles = (searchTerm, startYear, endYear) => {
    API.getArticles(searchTerm, startYear, endYear)
      .then(res =>
        this.setState(
          { 
            articles: res.data.response.docs, 
            title: "", 
            startYear: "", 
            endYear: "" })   
        )
      .catch(err => console.log(err));
  };

  saveArticle = obj => {
    API.saveArticle(obj)
      .then()
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) 
      this.loadArticles(this.state.title, this.state.startYear, this.state.endYear)  
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for & Save Articles of Interest</h1>
            </Jumbotron>
            <Search 
            searchTerm={this.state.title}
            onChangeSearch={this.handleInputChange}
            searchName="title"
            searchPlaceholder="Topic (required)"

            startYear={this.state.startYear}
            onChangeStartYear={this.handleInputChange}
            startYearName="startYear"
            startYearPlaceholder="Start Year (Optional)"

            endYear={this.state.endYear}
            onChangeEndYear={this.handleInputChange}
            endYearName="endYear"
            endYearPlaceHolder="End Year (Optional)"

            disabled={!(this.state.title)}
            onClick={this.handleFormSubmit}
            />
            <Results
            articles={this.state.articles}
            saveArticle={this.saveArticle}
            />
            <Col size="md-3">
              <Link to="/savedarticles">Saved Articles → </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FindArticles;
