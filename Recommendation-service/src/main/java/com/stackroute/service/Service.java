package com.stackroute.service;


import com.stackroute.domain.Movie;
import com.stackroute.domain.User;


import java.util.Collection;
import java.util.List;

@org.springframework.stereotype.Service
public interface Service {

    public Movie saveLikes(String username,Integer movieId);
    public List<Movie> saveDislikes(Movie movie, User user);

    public List<Movie> topFiveMovies();

    public Collection<Movie> getAllMovies();

    public List<Movie> getTrendingMovieByCity(String city);

    public List<Movie> getMovieByDefaultCity();

    public List<Movie> getMovieByLanguage(String language);

    public List<Movie> getMovieByDefaultLanguage();

    public List<Movie> getMovieByGenre(String genre);
}
