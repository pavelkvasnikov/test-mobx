import React from "react"
import TextSearch from "./TextSearch";
import OrderSelect from "./OrderSelect";

export default class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <OrderSelect store={this.props.store} />
        <TextSearch store={this.props.store} />

      </div>
    )
  }
}
