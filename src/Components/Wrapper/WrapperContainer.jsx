import React from "react";
import { connect } from "react-redux";
import { getBooks,getCurrentBook,getCurrentPage,getNewBooks } from "../../redux/booksPage-reducer";
import { getFetching } from "../../redux/booksPage-reducer";
import Wrapper from "./Wrapper";
import Preloader from "../Preloader/Preloader";

class WrapperContainer extends React.Component{
  changeBook =(n) =>{
    this.props.getCurrentBook(n)
  }
  getStrFilt = (filt) => {
    let str = '';
    if (!filt[0][0])
      filt.map(f => f[0] ? str = str + `${f[1]} ` : str = str)
    return str;
    }
  onPageChanged =(number=1) =>{
    this.props.getNewBooks(this.props.books.booksPage.sort,(number-1)*30,this.props.books.booksPage.search,this.getStrFilt(this.props.books.booksPage.filters))
    this.props.getCurrentPage(number)
  }
  render(){
    return(
      this.props.books.booksPage.isFetching ?  <Preloader/>:<Wrapper isFetching = {this.props.books.booksPage.isFetching} changeBook = {this.changeBook} onPageChanged = {this.onPageChanged} books = {this.props.books} />
    )
  }
}



let mapStatetoProps = (state) =>{
  return{
  books : state,
  }
}
export default connect( mapStatetoProps,{getFetching,getCurrentBook,getNewBooks,getBooks,getCurrentPage})(WrapperContainer);

