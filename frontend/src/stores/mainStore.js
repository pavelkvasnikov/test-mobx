import {action, runInAction} from "mobx"
import {decorate, observable, computed} from "mobx"
import {configure} from "mobx"
configure({enforceActions: 'always'})

class Store {
  initialLoad() {
     fetch('http://'+window.location.hostname+':3001/articles?search_type=index')
     .then(response =>
      runInAction(() => response.json())
     )
     .then(result => {
       runInAction(
         () => {
           this.articles = result.articles
           this.group_field = null
           this.group_with_totals = null
         //  this.grouped_articles = {}
         }
       )
     })

  }

  search(params) {
    fetch('http://'+window.location.hostname+':3001/articles?' + new URLSearchParams(params))
    .then(response =>
      runInAction(() => response.json())
    )
    .then(result => {
      runInAction(
        () =>  {
          this.articles = result.articles
          this.group_field = null
          this.group_with_totals = null
        }
      )
    })
  }

  group(params) {
    fetch('http://'+window.location.hostname+':3001/articles/group?' + new URLSearchParams(params))
    .then(response =>
      runInAction(() => response.json())
    )
    .then(result => {
      runInAction(
        () => {
          this.group_field = params
          this.group_with_totals = null
          this.grouped_articles = result.articles
        }
      )
    })
  }

  group_with_totals(params) {
    fetch('http://'+window.location.hostname+':3001/articles?' + new URLSearchParams(params))
    .then(response =>
      runInAction(() => response.json())
    )
    .then(result => {
      runInAction(
        () => {
          this.group_field = null
          this.group_with_totals = true
          this.articles = result.articles
        }
      )
    })
  }
}

decorate(Store, {
  articles: observable,
  group_field: observable,
  group_with_totals: observable,
  grouped_articles: observable,
  initialLoad: action,
  search: action,
  group: action
});
export default Store;
