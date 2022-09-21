// This is the layout element in which the main view sits
import { Component } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";
import EntityListItem from "../../visualisation/EntityListItem";

class VisualisationPanel extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      entities: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ],
      pageSize: 5
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePageChange(event, value) {
    this.setState({
      ...this.state,
      page: value
    });
  }

  handleDelete(entityName) {
    const idx = this.state.entities.indexOf(entityName);
    const ents = this.state.entities.slice();
    ents.splice(idx, 1);
    this.setState({
      ...this.state,
      entities: ents
    });
  }

  render() {
    const start = (this.state.page - 1) * this.state.pageSize;
    const end = start + this.state.pageSize;
    const entitiesInPage = this.state.entities.slice(start, end);
    const numPages = Math.ceil(this.state.entities.length / this.state.pageSize);

    // As a first pass, we're just making it a simple list of
    // entities
    // TODO Make this into a network graph later on
    return (
      <div className="vis-panel">
        <Pagination count={numPages} variant="outlined" color="primary" page={this.state.page} onChange={this.handlePageChange} />
        <Stack>
          {entitiesInPage.map(entity => {
            console.log(entity);
            return <EntityListItem key={entity} entityName={entity} onDelete={this.handleDelete} />
          })}
        </Stack>
      </div>
    );
  }
}

export default VisualisationPanel;