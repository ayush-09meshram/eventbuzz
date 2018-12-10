package com.stackroute.repositories;


import java.util.Collection;
import java.util.List;


import com.stackroute.domain.Movie;
import com.stackroute.domain.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "movies", path = "movies")
public interface MovieRepository extends Neo4jRepository<Movie, Long> {



	@Query("MATCH (movie:Movie) WHERE movie.movieId = {movieId} RETURN movie")
	public Movie findByMovieId(@Param("movieId") String movieId);

	@Query("MATCH (m:Movie)<-[l:LIKES]-(u:User) "
			+ "RETURN m.id as id, count(l) as likes "
			+ "ORDER BY likes,m.yearOfRelease DESC "
			+ "LIMIT 5")
	public List<Movie> getTopFiveMovies();

	@Query("MATCH (m:Movie)" + "RETURN m")
	public Collection<Movie> getAllMovies();

	@Query("MATCH (m:Movie)" + "WHERE m.city = {city}" + "ORDER BY m.yearOfRelease, m.likes" + "RETURN m")
	public List<Movie> sortByCity(@Param("city") String city);

	@Query("MATCH (m:Movie)" + "WHERE m.language = {language}" + "ORDER BY m.yearOfRelease, m.likes" + "RETURN m")
	public List<Movie> sortByLanguage(@Param("language") String language);

	@Query("MATCH (m:Movie)" + "WHERE m.genre = {genre}" + "ORDER BY m.yearOfRelease, m.likes" + "RETURN m")
	public List<Movie> sortByGenre(@Param("genre") String genre);
	@Query("MATCH (m:Movie{name: $movieTitle}),(u:User)" + "CREATE (u)-[:LIKES]->(m)")
	public Movie likes(Movie movie);

	@Query("MATCH (user:User{name: user})" + "CREATE (user) - [:DISLIKES] -> (movie3: Movie)" +"RETURN user,movie3")
	public List<Movie> dislikes(Movie movie, User user);
}