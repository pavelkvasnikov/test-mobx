import React from "react"
import {observer} from "mobx-react";

 class Row extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.article);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.article.name}
        </td>
        <td>
          {this.props.article.description}
        </td>
        <td>
          {this.props.article.article_type}
        </td>
        <td>
          {this.props.article.story_name}
        </td>
        <td>
          {this.props.article.created_at}
        </td>
    </tr>)
  }
}
export default observer(Row)
