import React from "react"
import FilterHeader from "./FilterHeader";
import Row from "./Row";

export default class TableContentCommon extends React.Component {

  render() {
    return(
      <table className="table">
      <tbody>
      <tr>
        {this.props.fields.map((field) => {
          return(
            <th key={field.field}>
              <FilterHeader click={this.props.OnClickSort} link_title={field}/>
            </th>)
        })}
      </tr>

      {this.props.articles.map(article =>
        <Row key={article.id} article={article} />)}
      </tbody>
    </table>
    )
  }
}
