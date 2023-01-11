import React, { Component } from 'react'
import NewsItem from '../components/NewsItem'

export class News extends Component {
//   
  constructor(){
    super();
    this.state={
        articles:[],
        loading: false
    }
  }
   async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28a7460a672940eab62e0f74f35ddef2&page=0";
    let data = await fetch(url);
    let pData = await data.json()
    this.setState({articles: pData.articles , totalresult:pData.totalResults})
    console.log(pData)
   }

   handlenextClick= async ()=> {
      if(this.state.page + 1 >Math.ceil(this.state.totalResults/20))
      {

      }
      else{

    
      let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28a7460a672940eab62e0f74f35ddef2&page=${this.state.page + 1}&pagesize=20`;
      let data = await fetch(url);
      let pData = await data.json()


      this.setState({
      
      page: this.state.page + 1,
      articles: pData.articles
    })
  }

   }
   handleprvsClick= async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28a7460a672940eab62e0f74f35ddef2&page=${this.state.page - 1}&pagesize=20`;
      let data = await fetch(url);
      let pData = await data.json()


      this.setState({
      
      page: this.state.page - 1,
      articles: pData.articles
    }
      )

   }
 
  render() {
    return (
      <div className="container my-3">
        <h1>Daily news</h1>
        <div className="row" >
        {this.state.articles?.map((element)=>{
  return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""} target="_blank" className="card-img-top" alt="..."/>
          </div>
          
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprvsClick}> &larr; previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handlenextClick}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
