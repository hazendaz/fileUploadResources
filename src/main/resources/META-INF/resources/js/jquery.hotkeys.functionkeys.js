/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2009-2026 Hazendaz
 */
$(document).ready(function() {
    $(document).on('keydown', 'f10', function(event) {
        // Throw a notification to the user what keys they successfully typed
        alert('You pressed F10');
        event.stopPropagation();
        event.preventDefault();
        return false;
    });

    $(document).on('keydown', 'f1', function(event) {
        // Throw a notification to the user what keys they successfully typed
        alert('You pressed F1');
        event.stopPropagation();
        event.preventDefault();
        return false;
    });

    $(document).on('keydown', 'f2', function(event) {
        // Throw a notification to the user what keys they successfully typed
        alert('You pressed F2');
        event.stopPropagation();
        event.preventDefault();
        return false;
    });

});
