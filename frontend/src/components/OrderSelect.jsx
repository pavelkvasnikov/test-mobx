import React from "react"
import {observer} from "mobx-react";

class OrderSelect extends React.Component {

  onChange = (e) => {
    let field = e.target.value;
    this.props.store.group({search_type: 'group', field})
  };

  render() {
    return (
      <div>
        <label>Group by field</label>
        <select onChange={this.onChange}>
          <option value="name">Name</option>
          <option value="description">Description</option>
          <option value="article_type">Article type</option>
          <option value="stories.name">Story name</option>
          <option value="created_at">Created at</option>
        </select>
      </div>
    )
  }
}
export default observer(OrderSelect)
