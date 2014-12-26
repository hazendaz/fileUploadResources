package com.hazendaz.junk;

// import javax.validation.constraints.Past;

import lombok.Data;

@Data
public class InvalidAnnotation {

    /**
     * Seat int specifically to test bad annotation. Uncomment @Past in order to cause error
     */
    // @Past
    private int seat;

}
