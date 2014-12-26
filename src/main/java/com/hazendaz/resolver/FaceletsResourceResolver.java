package com.hazendaz.resolver;

import java.net.URL;

import javax.faces.view.facelets.ResourceResolver;

public class FaceletsResourceResolver extends ResourceResolver {

    private final ResourceResolver parent;
    private final String           basePath;

    /**
     * Facelets REsource Resolver constructor
     * 
     * @param resourceResolver
     *            resourceResolver for resource location
     */
    public FaceletsResourceResolver(final ResourceResolver resourceResolver) {
        this.parent = resourceResolver;
        // TODO Make configureable?
        this.basePath = "/META-INF/resources";
    }

    /**
     * Resolve URL
     * 
     * @param path
     *            path to resource
     * @return URL of resource
     */
    @Override
    public URL resolveUrl(final String path) {
        // Resolves from WAR
        URL url = this.parent.resolveUrl(path);
        if (url == null) {
            // Resolves from JAR
            url = this.getClass().getResource(this.basePath + path);
        }
        return url;
    }

}
