import API from "../api/api"
const SET_BOOKS = "SET_BOOKS";
const SET_NEW_BOOKS = "SET_NEW_BOOKS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";
const SET_SEARCH = "SET_SEARCH";
const SET_SORT = "SET_SORT";
const SET_FILTERS = "SET_FILTERS";
const SET_FETCHING = "SET_FETCHING";
let InitialState = {
  books: [],
  pagesCount : 0,
  currentPage : 1,
  search : "",
  sort: 0,
  isFetching: true,
  filters: [
    [true,'all'],
    [false,'art'],
    [false,'biography'],
    [false,'computers'],
    [false,'history'],
    [false,'medicine'],
    [false,'poetry']
  ],
  currentBook : null
}
const booksPageR = (state = InitialState ,action) => {
  switch(action.type){
    case SET_NEW_BOOKS:
      let newArr = state.books.slice()
      action.books.map(b => newArr.push(b))
      return{
        ...state,books : newArr
      }
      case SET_BOOKS:
      
      return{
        ...state, books: action.books,pagesCount : action.pages,pagesCount : action.pages
      }
      case SET_FILTERS:
      return{
        ...state, 
        filters: action.newFilt
      }
     case SET_FETCHING:
      return{
        ...state, 
        isFetching: action.bool
      }
    case SET_CURRENT_PAGE:
      return{
        ...state,currentPage:action.numb
      }
    case SET_CURRENT_BOOK:
     
      return{
        ...state,currentBook:action.numb
      }
    case SET_SEARCH :
      return{
        ...state,search:action.newSearch
      }
    case SET_SORT :
      return{
        ...state,sort:action.newSort
      }
    default:
      return state;
  }
}
export const setNewBooks = (books) => ({type: SET_NEW_BOOKS,books})
export const setBooks = (books,pages) => ({type : SET_BOOKS, books, pages})
export const setPage = (numb) => ({type:SET_CURRENT_PAGE, numb})
export const setCurBook = (numb) => ({type:SET_CURRENT_BOOK, numb})
export const searchBooks = (newSearch) => ({type: SET_SEARCH, newSearch})
export const setSort = (newSort) => ({type: SET_SORT, newSort})
export const setFilters = (newFilt) => ({type: SET_FILTERS, newFilt})
export const setFetching = (bool) => ({type: SET_FETCHING, bool})
export const getBooks = (sort,number,searchData,filts) => {
  return (dispatch) =>{ 
  
  dispatch(searchBooks(searchData));
  API.getBooks(sort,number,searchData,filts).then(response => {
    dispatch(setBooks(response.data.items,response.data.totalItems))},
    dispatch(setFetching(false))
    )
  
  }
 
}
export const getNewBooks = (sort,number,searchData,filts) =>{
  return (dispatch) => {
    API.getBooks(sort,number,searchData,filts).then(response => {
    dispatch(setNewBooks(response.data.items))
    },
    dispatch(setFetching(false)))
  }
}
export const getSearchBooks = (txt) => {
  return(dispatch) =>{
    dispatch(searchBooks(txt))
  }
}
export const getSortBooks = (numb) => {
  return(dispatch) => {
    dispatch(setSort(numb))
  }
}
export const getCurrentPage = (number) => {
  return (dispatch) =>{
  dispatch(setPage(number))}}
export const getFilters = (filters) => {
  return (dispatch) => {
    dispatch(setFilters(filters))
  }
}
export const getCurrentBook = (number) => {
  return (dispatch) =>{
    dispatch(setCurBook(number))
  }
}
export const getFetching = (bool) => {
  return (dispatch) => {
    dispatch(setFetching(bool))
  }
}
export default booksPageR;