package com.stackroute.repositories;

import com.stackroute.domain.Likes;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface LikesRepository extends Neo4jRepository<Likes,Long> {
}
