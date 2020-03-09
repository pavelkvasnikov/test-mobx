import React from "react"
import TextSearch from "./TextSearch";

export default class Controls extends React.Component {

  render() {
    return (
      <div>
        <TextSearch store={this.props.store} />
      </div>
    )
  }
}
