import axios from "axios";

const apiURL = 'https://jsonplaceholder.typicode.com/posts'

export const mainAPI = () => {
    return(
        axios.get(apiURL)
            .then(response => console.log(response.data))
    )
}