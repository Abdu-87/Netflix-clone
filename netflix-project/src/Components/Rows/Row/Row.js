import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from "../../../../src/Utils/axios"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovie]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")
    const base_url='https://image.tmdb.org/t/p/original'
    useEffect(()=>{
    (async()=>{
        try{
            if (!fetchUrl) {
                console.error("fetchUrl prop is missing or undefined!");
                return; 
            }
            const request= await axios.get(fetchUrl)
            setMovie(request.data.results)
        }catch(error){
            console.log("error",error)
        }
    })()
},[fetchUrl]); 
const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie?.title||movie?.name||movie?.original_name)
        .then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search)
            console.log(urlParams)
            console.log(urlParams.get('v'))
            setTrailerUrl(urlParams.get('v'))
        })
    }
}
const opts={
    height:'390',
    width:'100%',
    playerVers:{
        autoPlay:1,
    }
}
  return (
    <div className='row'>
        <h1 className="">{title}</h1>
        <div className="row_poster">
            {movies?.map((movie,index) => (
                <img
                onClick={()=> handleClick(movie)}
                key={index} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} className={`row__poster $
                {isLargeRow && "row__posterLarge"}`}
                />
            ))}
        </div>
        <div style={{padding:'40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    </div>
  )
}

export default Row