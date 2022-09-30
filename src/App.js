import { Display } from './Display';
import React  from 'react';


export default class Movies extends React.Component{
  constructor(){
    super();
    this.state={
      movies:[]
    }
  }

 async componentDidMount(){
    console.log('mount')
    
    try{
      const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        console.log(responseJson,'response')
        responseJson.Search=responseJson.Search.map((movie)=>{
          movie.review ='';
          return movie
        });
    
        this.setState({movies:responseJson.Search});
        
        
      }

    }catch(e){
      console.log(e,'error')
    }
  }

  updateReview( review,id){
    console.log('xxx')

 
    let updatedMovies=this.state.movies.map((movie)=>{
      if(id==movie.imdbID){
        console.log('yes reviwed')
        movie.review=review
      }
      return movie;

    })
    console.log(updatedMovies[0])
    this.setState({movies:updatedMovies})

  }
  deleteReview(id){
    let removeReview=this.state.movies.map((data)=>{
      if(id==data.imdbID){
        data.review=" "
      }
      return data
    })
    this.setState({movies:removeReview})
   }
 

  render(){
    return (
  
      <Display movies={this.state.movies} updateReview={this.updateReview.bind(this)} deleteReview={this.deleteReview.bind(this)}></Display>
  
  )}
}