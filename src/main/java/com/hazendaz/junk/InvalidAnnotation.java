/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2009-2026 Hazendaz
 */
package com.hazendaz.junk;

import lombok.Data;

// import jakarta.validation.constraints.Past;

@Data
public class InvalidAnnotation {

    /**
     * Seat int specifically to test bad annotation. Uncomment @Past in order to cause error
     */
    // @Past
    private int seat;

}
