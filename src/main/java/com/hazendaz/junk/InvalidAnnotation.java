package com.hazendaz.junk;

import lombok.Data;

// import javax.validation.constraints.Past;

@Data
public class InvalidAnnotation {

    /**
     * Seat int specifically to test bad annotation. Uncomment @Past in order to cause error
     */
    // @Past
    private int seat;

}
