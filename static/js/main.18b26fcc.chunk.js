(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,o){},108:function(e,t,o){},232:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(42),c=o.n(s),r=(o(107),o(108),o(43)),i=o(44),u=o(48),b=o(47),l=o(15),g=o(45),k=o(9),p=o(31),j=o.n(p),h="AIzaSyDFkjEgk8g4yjgU9YbtPe-u8K0zfabGCJg",m={getBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return console.log(n),0===e?""==o?j.a.get("https://www.googleapis.com/books/v1/volumes?q=book+".concat(n,"&subject&key=").concat(h,"&maxResults=30&startIndex=").concat(t,"&orderBy=relevance")):j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(o,"&intitle&+").concat(n,"&subject&orderBy=relevance&key=").concat(h,"&maxResults=30&startIndex=").concat(t,"&orderBy=newest")):""==o?j.a.get("https://www.googleapis.com/books/v1/volumes?q=book+".concat(n,"&subject&key=").concat(h,"&maxResults=30&startIndex=").concat(t,"&orderBy=newest")):j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(o,"&intitle+").concat(n,"&subject&key=").concat(h,"&maxResults=30&startIndex=").concat(t,"&orderBy=newest"))}},f=m,d="SET_BOOKS",O="SET_NEW_BOOKS",_="SET_CURRENT_PAGE",v="SET_CURRENT_BOOK",B="SET_SEARCH",x="SET_SORT",S="SET_FILTERS",I="SET_FETCHING",C={books:[],pagesCount:0,currentPage:1,search:"",sort:0,isFetching:!0,filters:[[!0,"all"],[!1,"art"],[!1,"biography"],[!1,"computers"],[!1,"history"],[!1,"medicine"],[!1,"poetry"]],currentBook:null},N=function(e){return{type:B,newSearch:e}},y=function(e){return{type:x,newSort:e}},P=function(e){return{type:I,bool:e}},w=function(e,t,o,n){return function(a){a(N(o)),f.getBooks(e,t,o,n).then((function(e){var t,o;a((t=e.data.items,o=e.data.totalItems,{type:d,books:t,pages:o}))}),a(P(!1)))}},F=function(e){return function(t){t({type:_,numb:e})}},E=function(e){return function(t){t(P(e))}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var o=e.books.slice();return t.books.map((function(e){return o.push(e)})),Object(k.a)(Object(k.a)({},e),{},{books:o});case d:return Object(k.a)(Object(k.a)({},e),{},Object(g.a)({books:t.books,pagesCount:t.pages},"pagesCount",t.pages));case S:return Object(k.a)(Object(k.a)({},e),{},{filters:t.newFilt});case I:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.bool});case _:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.numb});case v:return Object(k.a)(Object(k.a)({},e),{},{currentBook:t.numb});case B:return Object(k.a)(Object(k.a)({},e),{},{search:t.newSearch});case x:return Object(k.a)(Object(k.a)({},e),{},{sort:t.newSort});default:return e}},T=o(23),A=o(7),H=o.n(A),V=o(1),Z=function(e){return Object(V.jsxs)("div",{className:H.a.bookBody,onClick:function(){return t=!0,o=e.id,void e.selectBook(t,o);var t,o},children:[Object(V.jsx)("img",{src:e.image,className:H.a.bookImage}),e.categories&&Object(V.jsx)("p",{className:H.a.categories,children:e.categories[0]}),Object(V.jsx)("p",{className:H.a.nameBook,children:e.title}),e.authors&&e.authors.map((function(e){return Object(V.jsx)("p",{className:H.a.authors,children:e})}))]})},G=o.p+"static/media/loader.a813db93.gif",J=o(98),K=o.n(J),D=function(e){return Object(V.jsx)("div",{className:"",children:Object(V.jsx)("div",{className:K.a.prelCont,children:Object(V.jsx)("img",{src:G,alt:""})})})},L=function(e){return Object(V.jsx)("div",{className:H.a.bookItem,children:Object(V.jsxs)("div",{className:H.a.itemCont,children:[Object(V.jsx)("button",{className:H.a.bookItemBtn,onClick:function(){e.selectBook(!1,null)},children:"X"}),Object(V.jsxs)("div",{className:H.a.bookInfo,children:[Object(V.jsx)("img",{className:H.a.bookItImage,src:e.book.volumeInfo.imageLinks.thumbnail,alt:""}),Object(V.jsxs)("div",{className:"",children:[Object(V.jsx)("p",{className:H.a.bookZag,children:e.book.volumeInfo.title}),Object(V.jsx)("p",{className:H.a.rating,children:"Rating:".concat(void 0!=e.book.volumeInfo.averageRating?e.book.volumeInfo.averageRating:"not")}),Object(V.jsxs)("p",{className:H.a.rating,children:["printType:".concat(e.book.volumeInfo.printType)," ",Object(V.jsx)("br",{})," ","publishedDate:".concat(e.book.volumeInfo.publishedDate)]})]})]})]})})},U=function(e){for(var t=-1,o=Math.ceil(e.books.booksPage.pagesCount/30),a=[],s=1;s<=o;s++)a.push(s);var c=Object(n.useState)([!1,0]),r=Object(T.a)(c,2),i=r[0],u=r[1];function b(e,t){u((function(){return[e,t]}))}return Object(V.jsxs)("div",{className:H.a.wrapper,children:[i[0]&&Object(V.jsx)(L,{book:e.books.booksPage.books[i[1]],selectBook:b}),Object(V.jsxs)("p",{children:["Found results : ",e.books.booksPage.pagesCount]}),Object(V.jsx)("div",{className:H.a.bookCont,children:e.isFetching?Object(V.jsx)(D,{}):e.books.booksPage.books.map((function(o){return t+=1,Object(V.jsx)(Z,{selectBook:b,changeBook:e.changeBook,id:t,categories:o.volumeInfo.categories,authors:o.volumeInfo.authors,image:o.volumeInfo.imageLinks&&o.volumeInfo.imageLinks.thumbnail,title:o.volumeInfo.title})}))}),e.books.booksPage.currentPage!=o&&Object(V.jsx)("button",{className:H.a.page,onClick:function(){return e.onPageChanged(e.books.booksPage.currentPage+1)},children:" \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 "})]})},Y=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).changeBook=function(t){e.props.getCurrentBook(t)},e.getStrFilt=function(e){var t="";return e[0][0]||e.map((function(e){return e[0]?t+="".concat(e[1]," "):t=t})),t},e.onPageChanged=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.props.getNewBooks(e.props.books.booksPage.sort,30*(t-1),e.props.books.booksPage.search,e.getStrFilt(e.props.books.booksPage.filters)),e.props.getCurrentPage(t)},e}return Object(i.a)(o,[{key:"render",value:function(){return this.props.books.booksPage.isFetching?Object(V.jsx)(D,{}):Object(V.jsx)(U,{isFetching:this.props.books.booksPage.isFetching,changeBook:this.changeBook,onPageChanged:this.onPageChanged,books:this.props.books})}}]),o}(a.a.Component),q=Object(l.b)((function(e){return{books:e}}),{getFetching:E,getCurrentBook:function(e){return function(t){t({type:v,numb:e})}},getNewBooks:function(e,t,o,n){return function(a){f.getBooks(e,t,o,n).then((function(e){var t;a((t=e.data.items,{type:O,books:t}))}),a(P(!1)))}},getBooks:w,getCurrentPage:F})(Y),M=o(5),z=o.n(M),X=function(e){var t=Object(n.useState)(e.filters),o=Object(T.a)(t,2),a=o[0],s=o[1],c=function(e){s((function(t){var o=[];return t.map((function(e){return o.push(e.slice())})),t[e][0]?o[e][0]=!1:o[e][0]=!0,o}))};return Object(n.useEffect)((function(){console.log(a),e.setFilters(a)}),[a]),Object(V.jsx)("div",{className:z.a.filters,children:Object(V.jsxs)("div",{className:z.a.filtsCent,children:[Object(V.jsxs)("div",{className:z.a.rowFilts,children:[Object(V.jsx)("p",{onClick:function(){return c(0)},className:a[0][0]?z.a.activeItem:z.a.filtItem,children:"All"}),Object(V.jsx)("p",{onClick:function(){return c(1)},className:a[1][0]?z.a.activeItem:z.a.filtItem,children:"ART"}),Object(V.jsx)("p",{onClick:function(){return c(2)},className:a[2][0]?z.a.activeItem:z.a.filtItem,children:"BIOGRAPHY"}),Object(V.jsx)("p",{onClick:function(){return c(3)},className:a[3][0]?z.a.activeItem:z.a.filtItem,children:"COMPUTERS"})]}),Object(V.jsxs)("div",{className:z.a.rowFilts,children:[Object(V.jsx)("p",{onClick:function(){return c(4)},className:a[4][0]?z.a.activeItem:z.a.filtItem,children:"HISTORY"}),Object(V.jsx)("p",{onClick:function(){return c(5)},className:a[5][0]?z.a.activeItem:z.a.filtItem,children:"MEDICINE"}),Object(V.jsx)("p",{onClick:function(){return c(6)},className:a[6][0]?z.a.activeItem:z.a.filtItem,children:"POETRY"})]})]})})},W=o(234),Q=o(233),$=Object(Q.a)({form:"search"})((function(e){return Object(V.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(V.jsx)(W.a,{className:z.a.inputSearch,name:"newSearch",component:"input",placeholder:"Enter your title"}),Object(V.jsx)(W.a,{className:z.a.btnSearch,name:"newSearchButton",component:"button",children:"Search"})]})})),ee=function(e){var t=Object(n.useState)(e.sort),o=Object(T.a)(t,2),a=o[0],s=o[1];Object(n.useEffect)((function(){e.getSortBooks(a)}),[a]);return Object(V.jsxs)("div",{className:"",children:[Object(V.jsx)("button",{onClick:function(){s(a=0)},className:0==a?z.a.btnActive:z.a.btnSort,children:"RELEVANCE"}),Object(V.jsx)("button",{onClick:function(){s(a=1)},className:1==a?z.a.btnActive:z.a.btnSort,children:"NEWEST"})]})},te=function(e){return Object(V.jsxs)("header",{className:z.a.headerCont,children:[Object(V.jsx)("h1",{className:z.a.headerZag,children:"Search for books"}),Object(V.jsx)($,{onSubmit:function(t){e.getSearchBooks(t)}}),Object(V.jsx)(X,{setFilters:e.setFilters,filters:e.props.state.booksPage.filters}),Object(V.jsx)(ee,{getSortBooks:e.getSortBooks,getBooks:e.props.getBooks,sort:e.props.state.booksPage.sort})]})},oe=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getStrFilt=function(e){var t="";return e[0][0]||e.map((function(e){return e[0]?t+="".concat(e[1]," "):t=t})),t},e.getSortBooks=function(t){e.props.getFetching(!0),e.props.setSort(t),e.props.getCurrentPage(1),e.props.getBooks(t,e.props.state.booksPage.currentPage,e.props.state.booksPage.search,e.getStrFilt(e.props.state.booksPage.filters))},e.getSearchBooks=function(t){t.newSearch==e.props.state.booksPage.search&&e.props.state.booksPage.isFetching||(e.props.getFetching(!0),e.props.getSearchBooks(t.newSearch),e.props.getCurrentPage(1),e.props.getBooks(e.props.state.booksPage.sort,e.props.state.booksPage.currentPage,t.newSearch,e.getStrFilt(e.props.state.booksPage.filters)))},e}return Object(i.a)(o,[{key:"render",value:function(){return Object(V.jsx)(te,{setFilters:this.props.getFilters,getSortBooks:this.getSortBooks,props:this.props,getSearchBooks:this.getSearchBooks})}}]),o}(a.a.Component),ne=Object(l.b)((function(e){return{state:e}}),{getFetching:E,getFilters:function(e){return function(t){t({type:S,newFilt:e})}},getCurrentPage:F,getSearchBooks:function(e){return function(t){t(N(e))}},getBooks:w,setSort:y})(oe);var ae=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)(ne,{}),Object(V.jsx)(q,{})]})},se=o(8),ce=o(100),re=o(235),ie=Object(se.c)({booksPage:R,form:re.a}),ue=Object(se.d)(ie,Object(se.a)(ce.a));c.a.render(Object(V.jsx)(l.a,{store:ue,children:Object(V.jsx)(ae,{className:"BodyAll"})}),document.getElementById("root"))},5:function(e,t,o){e.exports={headerZag:"Header_headerZag__2kkV-",headerCont:"Header_headerCont__17Hc6",btnSort:"Header_btnSort__1acgi",btnActive:"Header_btnActive__2yVBU",filters:"Header_filters__3Ew-h",filtItem:"Header_filtItem__23pi1",activeItem:"Header_activeItem__15MCc",inputSearch:"Header_inputSearch__1Jn6X",rowFilts:"Header_rowFilts__1Vi5p",btnSearch:"Header_btnSearch__2geDi",filtsCent:"Header_filtsCent__1CsAg"}},7:function(e,t,o){e.exports={page:"Book_page__3spas",bookCont:"Book_bookCont__3k2em",bookBody:"Book_bookBody__2GtlZ",wrapper:"Book_wrapper__2fyVV",bookImage:"Book_bookImage__1zRlr",authors:"Book_authors__1JtGV",nameBook:"Book_nameBook__396oR",categories:"Book_categories__3uy_y",bookItem:"Book_bookItem__39tKK",bookItemBtn:"Book_bookItemBtn__227s-",itemCont:"Book_itemCont__S_XTE",bookItImage:"Book_bookItImage__n1OCJ",bookInfo:"Book_bookInfo__8A8du",bookZag:"Book_bookZag__22v5-",rating:"Book_rating__1OC98"}},98:function(e,t,o){e.exports={prelCont:"Preloader_prelCont__1cY7B"}}},[[232,1,2]]]);
//# sourceMappingURL=main.18b26fcc.chunk.js.map