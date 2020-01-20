import {action, runInAction} from "mobx"
import {decorate, observable} from "mobx"
import {configure} from "mobx"
configure({enforceActions: 'always'})

class Store {
 // articles = [];

  initialLoad() {
     fetch('http://localhost:3001/articles')
     .then(response =>
      runInAction(() => response.json())
     )
     .then(result => {
       console.log(result.articles);
       runInAction(
         () => this.articles = result.articles
       )

     })

  }

  search(params) {
    console.log(params);
    fetch('http://localhost:3001/articles?' + new URLSearchParams(params))
    .then(response =>
      runInAction(() => response.json())
    )
    .then(result => {
      console.log(result.articles);
      runInAction(
        () => this.articles = result.articles
      )

    })
  }
}

decorate(Store, {
  articles: observable,
  initialLoad: action,
  search: action
});
export default Store;
