import React from "react"
import Row from "./Row"
import { observer } from "mobx-react"


 class Table extends React.Component {
  constructor(props) {
    super(props)
    let socket = new WebSocket("ws://"+window.location.host+":3006");
    socket.onmessage = (event) => {
      console.log(event.data);
      if (event.data) {
        this.props.store.initialLoad();
      }
    };
  }

  componentDidMount() {
    this.props.store.initialLoad();
  }

  render() {
    if (!this.props.store.articles)
      return null;

    return (
      <table className="table">
        <tbody>
        <tr>
          <th>
            Name
          </th>
          <th>
            Description
          </th>
          <th>
            Article type
          </th>
          <th>
            Story name
          </th>
          <th>
            Created at
          </th>
        </tr>


        {
        this.props.store.articles
        .map(article => <Row key={article.id} article={article} />)}
        </tbody>
      </table>
    )
  }
}
export default observer(Table);
