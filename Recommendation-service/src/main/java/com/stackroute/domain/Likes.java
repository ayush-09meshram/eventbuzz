
package com.stackroute.domain;

import org.neo4j.ogm.annotation.*;


    @RelationshipEntity(type = "LIKES")
    public class Likes {

        @Id
        @GeneratedValue
        private Long relId;

        @StartNode
        private User user;

        @EndNode
        private Movie movie;

        public Likes() {
        }

        public Likes(Movie movie, User user) {
            this.movie = movie;
            this.user = user;
        }

        public Long getId() {
            return relId;
        }



        public User getUser() {
            return user;
        }

        public Movie getMovie() {
            return movie;
        }

        public void setUser(User user) {
            this.user = user;
        }

        public void setMovie(Movie movie) {
            this.movie = movie;
        }
    }


