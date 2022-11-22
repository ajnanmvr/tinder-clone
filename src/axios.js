import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-ajnan.herokuapp.com/'
})

export default instance