package com.stackroute.configuration;

import com.stackroute.domain.Likes;
import com.stackroute.domain.Movie;
import com.stackroute.domain.User;
import com.stackroute.repositories.LikesRepository;
import com.stackroute.repositories.MovieRepository;
import com.stackroute.repositories.UserRepository;
import com.stackroute.service.ServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Configuration
public class myConfiguration {
    @Bean
    public Movie getMovieInstance(){
        return new Movie();
    }
    @Bean
    public User getUserInstance(){
        return new User();
    }
    @Bean
    public ServiceImpl getServiceInstance(){return new ServiceImpl();}
    @Bean
    public LikesRepository getLikesRepository(){
      return new LikesRepository() {
          @Override
          public <S extends Likes> S save(S s, int i) {
              return null;
          }

          @Override
          public <S extends Likes> Iterable<S> save(Iterable<S> iterable, int i) {
              return null;
          }

          @Override
          public Optional<Likes> findById(Long aLong, int i) {
              return Optional.empty();
          }

          @Override
          public Iterable<Likes> findAll() {
              return null;
          }

          @Override
          public Iterable<Likes> findAll(int i) {
              return null;
          }

          @Override
          public Iterable<Likes> findAll(Sort sort) {
              return null;
          }

          @Override
          public Iterable<Likes> findAll(Sort sort, int i) {
              return null;
          }

          @Override
          public Iterable<Likes> findAllById(Iterable<Long> iterable) {
              return null;
          }

          @Override
          public Iterable<Likes> findAllById(Iterable<Long> iterable, int i) {
              return null;
          }

          @Override
          public Iterable<Likes> findAllById(Iterable<Long> iterable, Sort sort) {
              return null;
          }

          @Override
          public Iterable<Likes> findAllById(Iterable<Long> iterable, Sort sort, int i) {
              return null;
          }

          @Override
          public Page<Likes> findAll(Pageable pageable) {
              return null;
          }

          @Override
          public Page<Likes> findAll(Pageable pageable, int i) {
              return null;
          }

          @Override
          public <S extends Likes> S save(S s) {
              return null;
          }

          @Override
          public <S extends Likes> Iterable<S> saveAll(Iterable<S> iterable) {
              return null;
          }

          @Override
          public Optional<Likes> findById(Long aLong) {
              return Optional.empty();
          }

          @Override
          public boolean existsById(Long aLong) {
              return false;
          }

          @Override
          public long count() {
              return 0;
          }

          @Override
          public void deleteById(Long aLong) {

          }

          @Override
          public void delete(Likes likes) {

          }

          @Override
          public void deleteAll(Iterable<? extends Likes> iterable) {

          }

          @Override
          public void deleteAll() {

          }
      };
    }
    @Bean
    public Likes getLikesInstanmce(){
        return new Likes();
    }
    @Bean
    public UserRepository getUserRepoInstance(){
        return new UserRepository() {
            @Override
            public User findByUserName(String userName) {
                return null;
            }

            @Override
            public <S extends User> S save(S s, int i) {
                return null;
            }

            @Override
            public <S extends User> Iterable<S> save(Iterable<S> iterable, int i) {
                return null;
            }

            @Override
            public Optional<User> findById(Long aLong, int i) {
                return Optional.empty();
            }

            @Override
            public Iterable<User> findAll() {
                return null;
            }

            @Override
            public Iterable<User> findAll(int i) {
                return null;
            }

            @Override
            public Iterable<User> findAll(Sort sort) {
                return null;
            }

            @Override
            public Iterable<User> findAll(Sort sort, int i) {
                return null;
            }

            @Override
            public Iterable<User> findAllById(Iterable<Long> iterable) {
                return null;
            }

            @Override
            public Iterable<User> findAllById(Iterable<Long> iterable, int i) {
                return null;
            }

            @Override
            public Iterable<User> findAllById(Iterable<Long> iterable, Sort sort) {
                return null;
            }

            @Override
            public Iterable<User> findAllById(Iterable<Long> iterable, Sort sort, int i) {
                return null;
            }

            @Override
            public Page<User> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public Page<User> findAll(Pageable pageable, int i) {
                return null;
            }

            @Override
            public <S extends User> S save(S s) {
                return null;
            }

            @Override
            public <S extends User> Iterable<S> saveAll(Iterable<S> iterable) {
                return null;
            }

            @Override
            public Optional<User> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(User user) {

            }

            @Override
            public void deleteAll(Iterable<? extends User> iterable) {

            }

            @Override
            public void deleteAll() {

            }
        };
    }
    @Bean
    public MovieRepository getInstance(){
        return new MovieRepository() {
            @Override
            public Movie findByMovieId(String movieId) {
                return null;
            }

            @Override
            public List<Movie> getTopFiveMovies() {
                return null;
            }

            @Override
            public Collection<Movie> getAllMovies() {
                return null;
            }

            @Override
            public List<Movie> sortByCity(String city) {
                return null;
            }

            @Override
            public List<Movie> sortByLanguage(String language) {
                return null;
            }

            @Override
            public List<Movie> sortByGenre(String genre) {
                return null;
            }

            @Override
            public Movie likes(Movie movie) {
                return null;
            }

            @Override
            public ArrayList<Movie> dislikes(Movie movie, User user) {
                return null;
            }

            @Override
            public <S extends Movie> S save(S s, int i) {
                return null;
            }

            @Override
            public <S extends Movie> Iterable<S> save(Iterable<S> iterable, int i) {
                return null;
            }

            @Override
            public Optional<Movie> findById(Long aLong, int i) {
                return Optional.empty();
            }

            @Override
            public Iterable<Movie> findAll() {
                return null;
            }

            @Override
            public Iterable<Movie> findAll(int i) {
                return null;
            }

            @Override
            public Iterable<Movie> findAll(Sort sort) {
                return null;
            }

            @Override
            public Iterable<Movie> findAll(Sort sort, int i) {
                return null;
            }

            @Override
            public Iterable<Movie> findAllById(Iterable<Long> iterable) {
                return null;
            }

            @Override
            public Iterable<Movie> findAllById(Iterable<Long> iterable, int i) {
                return null;
            }

            @Override
            public Iterable<Movie> findAllById(Iterable<Long> iterable, Sort sort) {
                return null;
            }

            @Override
            public Iterable<Movie> findAllById(Iterable<Long> iterable, Sort sort, int i) {
                return null;
            }

            @Override
            public Page<Movie> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public Page<Movie> findAll(Pageable pageable, int i) {
                return null;
            }

            @Override
            public <S extends Movie> S save(S s) {
                return null;
            }

            @Override
            public <S extends Movie> Iterable<S> saveAll(Iterable<S> iterable) {
                return null;
            }

            @Override
            public Optional<Movie> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Movie movie) {

            }

            @Override
            public void deleteAll(Iterable<? extends Movie> iterable) {

            }

            @Override
            public void deleteAll() {

            }
        };
    }
}
