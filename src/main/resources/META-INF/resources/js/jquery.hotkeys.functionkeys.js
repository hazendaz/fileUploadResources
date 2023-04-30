/*
 * fileUploadResources (https://github.com/hazendaz/fileUploadResources)
 *
 * Copyright 2009-2022 Hazendaz.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of The Apache Software License,
 * Version 2.0 which accompanies this distribution, and is available at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 *
 * Contributors:
 *     Hazendaz (Jeremy Landis).
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
