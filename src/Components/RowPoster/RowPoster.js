import React,{useEffect,useState} from "react"
import "./RowPoster.css"
import YouTube from "react-youtube"
import {API_KEY, imageUrl}from "../../constants/constants"
import axios from "../../axios"

function RowPoster(props) {
    const [urlId,setUrlId]=useState('')
    const[movies,setMovies]=useState([])
   useEffect(()=>{
    axios.get(props.url).then((respose)=>{
        console.log(respose.data)
        setMovies(respose.data.results)
    }).catch(error=>{
        alert('Network Error')
    })
   },[props])
  
  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respose=>{
        if(respose.data.results.length!==0){
            setUrlId(respose.data.results[0])
        }else{
            console.log('Trailer not avialble')
            alert("Trailer Not in Database");
        }
        })
    }
  return  (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster' :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
            )}
          
            
        </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}
export default RowPoster