import { useEffect, useState } from 'react'
import {getRandom} from '../services/getRequest'

export default function Home () {

    const [randomGif, setRandomGif] = useState([])

    useEffect(() => {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }, [])
    console.log(randomGif)

    return (
        <div className='App'>

        <div> <h2> Home of the GIF's </h2> </div>

            <div>
                <img src = {randomGif}/>
            </div>

        </div>
    )
}