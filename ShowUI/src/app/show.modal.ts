import { Movie } from "./movie.modal";


export class Show {

    cityName:string;
    movies:Movie[];
    
    Show(cityName:string, movies:Movie[]) {
        this.cityName = cityName;
        this.movies = movies;
    }
}