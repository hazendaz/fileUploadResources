/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2009-2026 Hazendaz
 */
package com.hazendaz.resolver;

import jakarta.faces.application.Resource;
import jakarta.faces.application.ResourceHandler;
import jakarta.faces.context.FacesContext;

import java.io.IOException;
import java.net.URL;

// TODO Class was migrated but unlikely needed with newer JSF versions as original idea here was for legacy jsf
public class FaceletsResourceResolver extends ResourceHandler {

    private final ResourceHandler parent;
    private final String basePath;

    /**
     * Facelets Resource Handler constructor
     *
     * @param resourceHandler
     *            parent ResourceHandler for resource location
     */
    public FaceletsResourceResolver(final ResourceHandler resourceHandler) {
        this.parent = resourceHandler;
        // TODO Make configurable?
        this.basePath = "/META-INF/resources";
    }

    @Override
    public Resource createResource(String resourceName) {
        Resource resource = parent.createResource(resourceName);
        if (resource == null) {
            // Try to resolve from JAR
            URL url = this.getClass().getResource(this.basePath + "/" + resourceName);
            if (url != null) {
                // You may need to create a custom Resource implementation here
                // For demonstration, returning null (implement as needed)
                return null;
            }
        }
        return resource;
    }

    @Override
    public void handleResourceRequest(jakarta.faces.context.FacesContext context) throws IOException {
        parent.handleResourceRequest(context);
    }

    @Override
    public String getRendererTypeForResourceName(String resourceName) {
        return parent.getRendererTypeForResourceName(resourceName);
    }

    @Override
    public Resource createResource(String resourceName, String libraryOrContractName) {
        Resource resource = parent.createResource(resourceName, libraryOrContractName);
        if (resource == null) {
            // Try to resolve from JAR
            URL url = this.getClass().getResource(this.basePath + "/" + resourceName);
            if (url != null) {
                // You may need to create a custom Resource implementation here
                // For demonstration, returning null (implement as needed)
                return null;
            }
        }
        return resource;
    }

    @Override
    public Resource createResource(String resourceName, String libraryName, String contentType) {
        Resource resource = parent.createResource(resourceName, libraryName, contentType);
        if (resource == null) {
            // Try to resolve from JAR
            URL url = this.getClass().getResource(this.basePath + "/" + resourceName);
            if (url != null) {
                // You may need to create a custom Resource implementation here
                // For demonstration, returning null (implement as needed)
                return null;
            }
        }
        return resource;
    }

    @Override
    public boolean libraryExists(String libraryName) {
        if (parent.libraryExists(libraryName)) {
            return true;
        }
        // Fallback: check if library exists in JAR
        URL url = this.getClass().getResource(this.basePath + "/" + libraryName);
        return url != null;
    }

    @Override
    public boolean isResourceRequest(FacesContext context) {
        return parent.isResourceRequest(context);
    }
}
