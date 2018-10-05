import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Saved from "../../pages/Saved";

class SavedList extends Component {
  state = {
    savedArticles: []
  };
  // When this component mounts, grab the artciles with the _id of this.props.match.params.id
  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState(
          { 
            savedArticles: res.data 
          }    
        )
        )
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
    this.loadSavedArticles();
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Saved Articles</h1>
        </Jumbotron>
        <Row>
          <Col size="md-12">
            <Saved 
              savedArticles={this.state.savedArticles}
              delete={this.handleDelete}
            />
            <Col size="md-3">
              <Link to="/">← Back to Finding Articles</Link>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default SavedList;
