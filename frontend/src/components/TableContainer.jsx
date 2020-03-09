import React from "react"
import { observer } from "mobx-react"
import TableContentCommon from "./TableContentCommon";
import TableContentGrouped from "./TableContentGrouped";
import OrderSelect from "./OrderSelect";

class TableContainer extends React.Component {

  constructor(props) {
    super(props)
    let socket = new WebSocket("ws://"+window.location.hostname+":3006");
    socket.onmessage = (event) => {
      console.log(event.data);
      if (event.data) {
        this.props.store.initialLoad();
      }
    };
    this.state = {
      fields: [
      {selected_up: false, selected_down: false, field: 'id'          , value:'Id'},
      {selected_up: false, selected_down: false, field: 'name'        , value:'Name'},
      {selected_up: false, selected_down: false, field: 'description' , value:'Description'},
      {selected_up: false, selected_down: false, field: 'article_type', value:'Article type'},
      {selected_up: false, selected_down: false, field: 'stories.name', value:'Story name'},
      {selected_up: false, selected_down: false, field: 'created_at'  , value:'Created at'}
    ]}
  }

  OnClickSort = (e) => {
    const data = e.currentTarget.dataset;
    const sort = data.sort;
    const selected_field = data.field;
    const fields = this.state.fields.slice();
    fields.forEach((field) => {
      if (field.field === selected_field) {
        field.selected_up = sort === 'asc'
        field.selected_down = sort === 'desc'
      } else {
        field.selected_down = false;
        field.selected_up = false;
      }
    })
    this.props.store.search({search_type: 'sort', field: selected_field, order: sort})
    this.setState({fields: fields});
  };

  componentDidMount() {
    this.props.store.initialLoad();
  }

  render() {
    if (!this.props.store.articles)
      return null;

    return (
      <div>
        <OrderSelect store={this.props.store}  fields={this.state.fields} />
        {!this.props.store.group_field &&
        <TableContentCommon
          store={this.props.store}
          OnClickSort={this.OnClickSort}
          fields={this.state.fields}
          articles={this.props.store.articles} />
        }
        {this.props.store.group_field &&
        <TableContentGrouped
          store={this.props.store}
          OnClickSort={this.OnClickSort}
          fields={this.state.fields}
        />
        }
      </div>


    )
  }
}
export default observer(TableContainer);
