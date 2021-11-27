import React from "react";
import Filter from "./Filter/Filter";
import st from "./Header.module.css"
import Search from "./Search/Search";
import Sort from "./sort/Sort";
const Header = (props) =>{
  const onSubmit = (formData) => {
    props.getSearchBooks(formData)
  }
   
  return(
    <header className = {st.headerCont}>
      <h1 className={st.headerZag}>Search for books</h1>
      <Search onSubmit = {onSubmit}/>
      <Filter setFilters = {props.setFilters} filters = {props.props.state.booksPage.filters}/>
      <Sort getSortBooks = {props.getSortBooks} getBooks ={props.props.getBooks} sort = {props.props.state.booksPage.sort}/>
    </header>
  )
}


export default Header;