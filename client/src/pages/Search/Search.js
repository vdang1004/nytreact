import React from "react";
import { Col } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

const Search = props => ( 

      <Col size="md-12">
      <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
        <form>
          <Input
            value={props.searchTerm}
            onChange={props.onChangeSearch}
            name={props.searchName}
            placeholder={props.searchPlaceholder}
          />
          <Input
            value={props.startYear}
            onChange={props.onChangeStartYear}
            name={props.startYearName}
            placeholder={props.startYearPlaceholder}
          />
          <Input
            value={props.endYear}
            onChange={props.onChangeEndYear}
            name={props.endYearName}
            placeholder={props.endYearPlaceHolder}
          />
          <FormBtn
            disabled={props.disabled}
            onClick={props.onClick}
          >
            Search
          </FormBtn>
        </form>
      </Col>

)

export default Search;