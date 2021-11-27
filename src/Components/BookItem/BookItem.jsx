import React from "react";
import {NavLink} from "react-router-dom";
import st from "../Wrapper/Book/Book.module.css"
const BookItem = (props) => {
  return(
    <div className ={st.bookItem}>
      <div className={st.itemCont}>
        <button className = {st.bookItemBtn} onClick = {()=>{props.selectBook(false,null)}}>X</button>
        <div className={st.bookInfo}>
          <img className = {st.bookItImage} src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
          <div className="">
            <p className = {st.bookZag}>{props.book.volumeInfo.title}</p>
            <p className ={st.rating}>{`Rating:${props.book.volumeInfo.averageRating != undefined ? props.book.volumeInfo.averageRating: "not"}`}</p>
            <p className ={st.rating}>{`printType:${props.book.volumeInfo.printType}`} <br/> {`publishedDate:${props.book.volumeInfo.publishedDate}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookItem;