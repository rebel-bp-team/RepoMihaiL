import axios from 'axios';
import { Movie } from '../models/movie.model';


const baseUrl: string = 'http://www.omdbapi.com/?apikey=3c010079'; 

export const filterMovies = async (input:string) => {
    let queryUrl= baseUrl+ '&s=' + input;

    var filteredMovies = await axios.get(queryUrl)
                                    .then(({ data }) => {
                                     return data.Search;
                                     })
                                    .catch(err=>{return []});
    return filteredMovies;



}