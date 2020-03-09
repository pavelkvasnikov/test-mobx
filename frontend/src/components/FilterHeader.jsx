import React from "react"

export default class FilterHeader extends React.Component {

  render() {
    return (
      <span>
        <span>
           {this.props.link_title.value}
        </span>
        <span className="arrow-container">
          <span data-field={this.props.link_title.field} data-sort="asc" onClick={this.props.click} className={`arrow-up ${this.props.link_title.selected_up ? 'arrow-disabled' : ''}`}></span>
          <span data-field={this.props.link_title.field} data-sort="desc" onClick={this.props.click} className={`arrow-down ${this.props.link_title.selected_down ? 'arrow-disabled' : ''}`}></span>
        </span>
      </span>

    )
  }
}
