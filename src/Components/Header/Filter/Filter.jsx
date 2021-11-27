import React from "react";
import { useState,useEffect } from "react";
import st from "../Header.module.css"
const Filter = (props) => {
  
  let [filts,changeFilts] = useState(props.filters)
  let changeItems = (numb) => {
    changeFilts((prev)=>{
      let newArr = [];
      prev.map(p => newArr.push(p.slice()));
      prev[numb][0] ? newArr[numb][0]  = false: newArr[numb][0] = true;
      return  newArr;
    })}
  useEffect(() =>{
    console.log(filts)
    props.setFilters(filts)
  },[filts])
  return(
  <div className={st.filters}>
    <p onClick = {() => changeItems(0)} className = {filts[0][0] ?  st.activeItem : st.filtItem}>All</p>
    <p onClick = {() => changeItems(1)} className = {filts[1][0] ?  st.activeItem : st.filtItem}>ART</p>
    <p onClick = {() => changeItems(2)} className = {filts[2][0] ?  st.activeItem : st.filtItem}>BIOGRAPHY</p>
    <p onClick = {() => changeItems(3)} className = {filts[3][0] ?  st.activeItem : st.filtItem}>COMPUTERS</p>
    <p onClick = {() => changeItems(4)} className = {filts[4][0] ?  st.activeItem : st.filtItem}>HISTORY</p>
    <p onClick = {() => changeItems(5)} className = {filts[5][0] ?  st.activeItem : st.filtItem}>MEDICINE</p>
    <p onClick = {() => changeItems(6)} className = {filts[6][0] ?  st.activeItem : st.filtItem}>POETRY</p>
  </div>
  )
}

export default Filter;