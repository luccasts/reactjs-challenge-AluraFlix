import { useContext } from "react";
import { VideosContext } from "../context/Videos";

export const useVideosContext = () => {
    
const { videos, setVideos } = useContext(VideosContext);

    const fetchVideoData = () => {
        fetch('http://localhost:3000/videos')
        .then(r => r.json())
        .then(r => setVideos(r));

    }

    const postVideoData = (value) => {
        fetch('http://localhost:3000/videos', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title: value.title,
                category:value.category,
                videoLink: value.videoLink,
                image: value.image,
                description: value.description
            })
        })
        setVideos([...videos, value])
        
    }

   const putVideoData = (value, id) => {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title: value.title,
                category:value.category,
                videoLink: value.videoLink,
                image: value.image,
                description: value.description
            })
        })   
        fetchVideoData()
   }

    const deleteVideoData = (id) => {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
        })
        setVideos(videos.filter((video) => video.id !== id))
    }

    const categoryArray = [
        {
          name:'Front End'
        },
        {
          name:'Back End'
         
        },
        {
            name:'Mobile'
        }
    ];


    return {
        videos,
        postVideoData,
        deleteVideoData,
        putVideoData,
        setVideos,
        categoryArray,

    }
}
