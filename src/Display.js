import React from 'react';
import './Display.css';

export const Display = (props) => {
 
let moviesList={}

  return (
  
    <div className='row-movie'>
		  {props.movies.map((movie) => (
			<div key={movie.imdbID} className="movie-box">
				<img src={movie.Poster} alt='movie'></img>
              <div className='movie-review'>
                <input type="text" className='input-review' onChange={(event)=>{ moviesList[movie.imdbID]=event.target.value}}></input><br></br>
                <button className='button-review'onClick={()=> props.updateReview(moviesList[movie.imdbID],movie.imdbID)}>Review</button>
                <button className='delete-button'onClick={()=>props.deleteReview(moviesList[movie.imdbID],movie.imdbID)}>Delete</button> 
              <p> {movie.review}</p>
              </div>            
			</div>
		))}
    </div>
  
  )
}
