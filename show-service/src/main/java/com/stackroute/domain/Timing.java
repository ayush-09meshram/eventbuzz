package com.stackroute.domain;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Timing {
     @Id
     private String showId;
     private String showTime;

     private List<Category> categories;
}
