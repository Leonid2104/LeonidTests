import React from "react";
import st from "./Book/Book.module.css"
import Book from "./Book/Book";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";
import BookItem from "../BookItem/BookItem";
const Wrapper = (props) => {
  let j = -1;
  let PagesCount = Math.ceil(props.books.booksPage.pagesCount / 30);
    let pages = [];
    for(let i = 1; i <= PagesCount; i++){
      pages.push(i);
    }
  let [bookIt,setBookIt] = useState([false, 0])
  function selectBook(bool,id){
      setBookIt(() => {
        return [bool,id]

      })
  }
 
  return(
   <div className={st.wrapper}>
      {bookIt[0] && <BookItem book = {props.books.booksPage.books[bookIt[1]]} selectBook = {selectBook} />}
      <p>Found results : {props.books.booksPage.pagesCount}</p>
      <div className={st.bookCont}>
        {props.isFetching ? <Preloader/> :props.books.booksPage.books.map(b =>{
          j+=1
          return (<Book selectBook ={selectBook} changeBook ={props.changeBook} id = {j} categories = {b.volumeInfo.categories} authors = {b.volumeInfo.authors} image = {b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail} title = {b.volumeInfo.title} />)})}
      </div>
      {props.books.booksPage.currentPage != PagesCount && <button className = {st.page} onClick = {() => props.onPageChanged(props.books.booksPage.currentPage+1)}> Показать ещё </button>}
    </div>
  )
}
export default Wrapper