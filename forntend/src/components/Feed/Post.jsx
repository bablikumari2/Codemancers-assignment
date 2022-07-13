// import "./Feed.css"
import "./Post.css"
import { Avatar } from '@material-ui/core'
import React from 'react'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import GifIcon from '@material-ui/icons/Gif';

import { useState } from 'react'

import  GifSearch from './Giphy'

function Post() {
  const[item,setItem] = useState("")
    const[data,setData]=useState([])

    const handleChange  =(e)=>{
         setItem(e.target.value)
    }
    const handleAdd = () => {
        setData([...data, item])
        setItem("")
      };
    //   const gif=()=>{
    //     < GifSearch/> 
    //   }
  return (
    
     <div className='feed_center'>
        
                        <div className='pop_top'>

                            <button> Compose Post</button>
                            <button >  Photo/Video Album</button>
                            <button>  Live Video</button>
                          
                        </div>
                <div className='feed_top'>
                    <div className='photo'>
                        <Avatar />

                    </div>

                    <form>
                        <input type="text" placeholder="What's on your mind"  value={item} onChange={handleChange}  />
                        {/* <button onClick={handleAdd}>Post</button> */}
                    </form>
                </div>


                <div className="feed__bottom">
                   
                   
                    < GifSearch/>
                    <div className="feed__options">
                        <VideocamIcon style={{ color: "red" }} />
                        <h3>Live video</h3>
                    </div>
                    <div className="feed__options">
                        <PhotoLibraryIcon style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="feed__options">
                        <InsertEmoticonIcon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                    </div>
                   
                </div>
                <div className='pop_down'>
                            <div className='down'>
                          
                            <button>Only me</button>
                            <div className='post'>
                            <button onClick={handleAdd}>Post</button>
                            </div>
                            </div>
                        </div>
                
                
                {data.map((e) => (
          <div className="map">
            <div className="map_dis">
                <Avatar />
            <h1>{e}</h1>
            </div>
            <div className='map_bottom'>

                            <button> Like</button>
                            <button > COMMENT</button>
                            <button> SHARE</button>
                          
                        </div>
              
          
          
          </div>
        ))}
            </div>
  
  )
}

export default Post