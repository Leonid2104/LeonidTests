import React from "react";
import {Field, reduxForm} from "redux-form"
import st from "../Header.module.css"
const SearchForm = (props) => {
  
 return(
   <form onSubmit = {props.handleSubmit}>
     <Field className = {st.inputSearch} name = "newSearch" component = "input" placeholder = "Enter your title"/>
     <Field className = {st.btnSearch} name = "newSearchButton" component = "button" >Search</Field>
   </form>
 ) 
}
const Search = reduxForm({
  form : "search"
})(SearchForm)
export default Search;