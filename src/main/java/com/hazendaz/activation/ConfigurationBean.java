/*
 * fileUploadResources (https://github.com/hazendaz/fileUploadResources)
 *
 * Copyright 2009-2024 Hazendaz.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of The Apache Software License,
 * Version 2.0 which accompanies this distribution, and is available at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 *
 * Contributors:
 *     Hazendaz (Jeremy Landis).
 */
package com.hazendaz.activation;

import static jakarta.faces.annotation.FacesConfig.Version.JSF_2_3;

import jakarta.faces.annotation.FacesConfig;

@FacesConfig(
        // Activates CDI build-in beans
        version = JSF_2_3)
public class ConfigurationBean {
    // Do Nothing
}
