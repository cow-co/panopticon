import Paper from '@mui/material/Paper';
import { Component } from "react";
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

class EntityListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDelete(this.props.entityName);
  }

  render() {
    return (
      <Paper sx={{ marginTop: 3, paddingTop: 1, paddingBottom: 1 }}>        
        {this.props.entityName}
        <IconButton variant="contained" color="error" onClick={this.handleClick} >
          <DeleteForever />
        </IconButton>
      </Paper>
    );
  }
}

export default EntityListItem;