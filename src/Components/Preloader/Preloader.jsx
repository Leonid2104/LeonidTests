import React from "react";
import load from "../../img/loader.gif"
import st from "./Preloader.module.css"
const Preloader = (props) => {
  return(
    <div className="">
      <div className={st.prelCont}>
        <img src = {load}  alt="" />
      </div>
    </div>
  )
}

export default Preloader;