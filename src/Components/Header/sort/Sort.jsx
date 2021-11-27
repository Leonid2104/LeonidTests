import React from "react";
import st from "../Header.module.css"
import { useState, useEffect } from "react";
import { getSortBooks } from "../../../redux/booksPage-reducer";
const Sort = (props) => {
  let [currentSort,changeSort] = useState(props.sort);
  useEffect(() => {
    props.getSortBooks(currentSort)
  },[currentSort])

  let sortRel = () => {
    changeSort(currentSort = 0)
  }
  let sortNew = () => {
    changeSort(currentSort = 1)
  }
  return (
    <div className="">
      <button onClick = {()=> sortRel()}  className = {currentSort == 0 ? st.btnActive: st.btnSort}>RELEVANCE</button>
      <button onClick = {()=> sortNew()} className = {currentSort == 1 ? st.btnActive: st.btnSort}>NEWEST</button>
    </div>
  )
}


export default Sort;