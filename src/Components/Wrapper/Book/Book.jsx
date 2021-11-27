import React from "react";
import st from "./Book.module.css";
import {NavLink} from "react-router-dom"
const Book = (props) => {
  let selectBookTo = (bool,id) => {
    props.selectBook(bool,id)
  }
  return(
    <div className={st.bookBody} onClick = {() => selectBookTo(true,props.id)}>
        <img src={props.image} className = {st.bookImage} />
        {props.categories && <p className = {st.categories}>{props.categories[0]}</p>}
        <p className = {st.nameBook}>{props.title}</p>
        {props.authors && props.authors.map(a => {return <p className = {st.authors}>{a}</p>} ) }
    </div>
  )
}
export default Book;