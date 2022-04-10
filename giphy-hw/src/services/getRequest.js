import axios from 'axios'

const RandomURL = `https://api.giphy.com/v1/gifs/random?api_key=Bh46f1gRvAgZA7S6K6sz7CW9eeevXbSJ`

const TrendyURL = 'https://api.giphy.com/v1/gifs/trending?api_key=Bh46f1gRvAgZA7S6K6sz7CW9eeevXbSJ'

export function getRandom(){
    const response = axios.get(RandomURL)
    return response
}

export function getTrends(){
    const response = axios.get(TrendyURL)
    return response 
}


// export const getRandom = () =>{}