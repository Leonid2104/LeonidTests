import React from "react";
import { connect } from "react-redux";
import {getSearchBooks,getBooks,setSort,getCurrentPage,getFetching,getFilters} from "../../redux/booksPage-reducer"
import Header from "./Header";
class HeaderContainer extends React.Component{
  getStrFilt = (filt) => {
    let str = '';
    if (!filt[0][0])
      filt.map(f => f[0] ? str = str + `${f[1]} ` : str = str)
    return str;
    }
  getSortBooks = (numberSort) => {
    this.props.getFetching(true)
    this.props.setSort(numberSort)
    this.props.getCurrentPage(1)
    this.props.getBooks(numberSort,this.props.state.booksPage.currentPage,this.props.state.booksPage.search,this.getStrFilt(this.props.state.booksPage.filters))
  }

  getSearchBooks = (dataSearch) => {
    if (dataSearch.newSearch != this.props.state.booksPage.search || !this.props.state.booksPage.isFetching){
      this.props.getFetching(true)
      this.props.getSearchBooks(dataSearch.newSearch)
      this.props.getCurrentPage(1)
      this.props.getBooks(this.props.state.booksPage.sort,this.props.state.booksPage.currentPage,dataSearch.newSearch,this.getStrFilt(this.props.state.booksPage.filters))
  }
  }
  render(){
    return(
      <Header setFilters = {this.props.getFilters} getSortBooks = {this.getSortBooks} props = {this.props} getSearchBooks ={this.getSearchBooks}/>
    )
  }
}

let mapStatetoProps = (state) =>{
  return{
  state: state
}
}
export default connect(mapStatetoProps,{getFetching,getFilters,getCurrentPage,getSearchBooks,getBooks,setSort})(HeaderContainer)