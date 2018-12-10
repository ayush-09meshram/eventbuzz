package com.stackroute.service;

import com.stackroute.domain.Movie;
import com.stackroute.domain.User;
import com.stackroute.repositories.UserRepository;
import com.stackroute.domain.Likes;
import com.stackroute.repositories.LikesRepository;
import com.stackroute.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;


import java.util.Collection;
import java.util.List;

public class ServiceImpl implements Service {


    @Autowired
    MovieRepository movieRepository;

    @Autowired
    User user;
    @Autowired
    LikesRepository likesRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    Likes likes;


    @KafkaListener(groupId = "userconsumer",topics="login",containerFactory ="kafkaUserListenerContainerFactory")

    public void getUser(@Payload User kafkaUser){


        this.user=kafkaUser;

    }

    @Override
    public List<Movie> saveDislikes(Movie movie, User user){

        return this.movieRepository.dislikes(movie,user);
    }

    @Override
    public List<Movie> topFiveMovies(){
        return this.movieRepository.getTopFiveMovies();
    }

    @Override
    public Collection<Movie> getAllMovies(){

        return this.movieRepository.getAllMovies();

    }

    @Override
    public List<Movie> getTrendingMovieByCity(String city){

        return this.movieRepository.sortByCity(city);
    }

    @Override
    public List<Movie> getMovieByDefaultCity(){
        String city = this.user.getCity();
        return this.movieRepository.sortByCity(city);
    }


    @Override
    public List<Movie> getMovieByLanguage(String language){
        return this.movieRepository.sortByLanguage(language);
    }

    @Override
    public List<Movie> getMovieByDefaultLanguage(){
        String language = this.user.getLanguage();
        return this.movieRepository.sortByLanguage(language);
    }

    @Override
    public Movie saveLikes(String userName, Integer movieId) {
      User user1 = userRepository.findByUserName(userName);
        Movie movie1 = movieRepository.findByMovieId(movieId.toString());


        likes.setUser(user1);
        likes.setMovie(movie1);
        likesRepository.save(likes);

        return movie1;
    }

    @Override
    public List<Movie> getMovieByGenre(String genre) {
        return this.movieRepository.sortByGenre(genre);

    }
}
