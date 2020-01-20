import React from "react"

export default class OrderSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange = (e) => {
    let [field, order] = e.target.value.split('|');
    this.props.store.search({search_type: 'sort', field, order})
  };

  render() {
    return (
      <div>
        <label>Sort by field</label>
        <select onChange={this.onChange}>
          <option value="name|asc">Name ↑</option>
          <option value="name|desc">Name ↓</option>
          <option value="description|asc">Description ↑</option>
          <option value="description|desc">Description ↓</option>
          <option value="article_type|asc">Article type ↑</option>
          <option value="article_type|desc">Article type ↓</option>
          <option value="story_id|asc">Story name ↑</option>
          <option value="story_id|desc">Story name ↓</option>
          <option value="created_at|asc">Created at ↑</option>
          <option value="created_at|desc">Created at ↓</option>
        </select>
      </div>
    )
  }
}
