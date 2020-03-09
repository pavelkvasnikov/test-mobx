import React from "react"

export default class TextSearch extends React.Component {

  onInput = (e) => {
    if (e.target.value)
      this.props.store.search({search_type: 'like', field: e.target.value});
    else
      this.props.store.initialLoad();
  };

  render() {
    return (
      <div>
      <label>Search by text or description</label>
      <input onChange={this.onInput} type="text" />
      </div>
    )
  }
}
