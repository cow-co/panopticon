// This is the layout element in which the main view sits
import { Component } from "react";
import Pagination from '@mui/material/Pagination';

class VisualisationPanel extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event, value) {
    this.setState({
      ...this.state,
      page: value
    });
  }

  render() {
    // As a first pass, we're just making it a simple list of
    // entities
    // TODO Make this into a network graph later on
    return (
      <div className="vis-panel">
        <h2>{this.state.page}</h2>
        <Pagination count={5} variant="outlined" color="primary" page={this.state.page} onChange={this.handlePageChange} />
      </div>
    );
  }
}

export default VisualisationPanel;