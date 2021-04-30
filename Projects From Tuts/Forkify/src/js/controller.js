import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView';


import 'core-js/stable'
import 'regenerator-runtime/runtime'
if (module.hot) {
  module.hot.accept()
}

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)
    if (!id) return
    recipeView.renderSpinner()

    // updated search results with selected recipe
    resultsView.update(model.getSearchResultsPage())
    bookmarksView.update(model.state.bookmarks)

    // load recipe 
    await model.loadRecipe(id);

    // render recipe container
    recipeView.render(model.state.recipe)

  } catch (err) {
    recipeView.renderError()
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (query === '' || !query) return resultsView.renderError()


    await model.loadSearchResults(query)
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getSearchResultsPage())

    paginationView.render(model.state.search)

  } catch (err) {
    console.log(err)
  }
}

const controlPagination = function (page) {
  resultsView.render(model.getSearchResultsPage(page))
  paginationView.render(model.state.search)
}

const controlServings = function (newServings) {
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)

}

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe)

  } else {
    model.deleteBookmark(model.state.recipe.id)
  }
  recipeView.update(model.state.recipe)

  bookmarksView.render(model.state.bookmarks)
}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks)
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
}
init();
