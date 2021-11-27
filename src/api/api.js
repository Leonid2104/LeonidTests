import axios from "axios"
const API_KEY = "AIzaSyDFkjEgk8g4yjgU9YbtPe-u8K0zfabGCJg";

const API = {
  getBooks(sort = 0,number=0,searchData = '',filters = ''){
    console.log(filters)
   
    if (sort === 0){
      if (searchData == ''){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=book+${filters}&subject&key=${API_KEY}&maxResults=30&startIndex=${number}&orderBy=relevance`)
      }else{
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchData}&intitle&q=${filters}&subject&orderBy=relevance&key=${API_KEY}&maxResults=30&startIndex=${number}&orderBy=newest`)}
    }else{
      if (searchData == ''){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=book+${filters}&subject&key=${API_KEY}&maxResults=30&startIndex=${number}&orderBy=newest`)
      }else{
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchData}&intitle+${filters}&subject&orderBy=newest&key=${API_KEY}&maxResults=30&startIndex=${number}&orderBy=newest`)}
    }
  }
}
export default API;