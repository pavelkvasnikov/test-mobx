import React from "react"
import FilterHeader from "./FilterHeader";

export default class TableContentGrouped extends React.Component {

  render() {
    console.log(this.props.store.grouped_articles);


    return (
      <table>
        <tbody>
        <tr>
          {this.props.fields.map((field) => {
            return (
              <th key={field.field}>
                <FilterHeader click={this.props.OnClickSort} link_title={field}/>
             </th>
            )
        })}
        </tr>
        {Object.entries(this.props.store.grouped_articles).map(([article, value]) => {
          return (<tr>
            <td>
              {article}
            </td>
            <td>
              {value.map((v) => v.name).join(', ')}
            </td>
            <td>
              {value.map((v) => v.description).join(', ')}
            </td>
            <td>
              {value.map((v) => v.article_type).join(', ')}
            </td>
            <td>
              {value.map((v) => v.story_name).join(', ')}
            </td>
            <td>
              {value.map((v) => v.created_at).join(', ')}
            </td>
          </tr>)
        })}
        </tbody>
      </table>
    )
  }
}



