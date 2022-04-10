import { useEffect, useState } from 'react'
import { getTrends } from '../services/getRequest'

export default function Home() {
    
    const [trendingGif, setTrendingGif] = useState([])

    useEffect(() => {
        getTrends()
        .then(res => setTrendingGif(res.data.data))
    },[])

    console.log(trendingGif)

    return(
        <div>

         <h1>Top 50 trending Gifs</h1> 

        {trendingGif.map( el =>{
            return(

                <div className = 'trendy'  key = {el.id}>

                <img src = {el.images.fixed_height_small.url} />
                
                </div>
            )
        }) }
            
            
        </div>
    
    )
}