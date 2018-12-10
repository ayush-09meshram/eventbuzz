package com.stackroute.repositories;
import com.stackroute.domain.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;


/**
     *
     * @author milandeket
     */
    public interface UserRepository extends Neo4jRepository<User,Long> {
        @Query("MATCH (person:User) WHERE person.userName = {userName} RETURN person")
        User findByUserName(@Param("userName") String userName);

    }

