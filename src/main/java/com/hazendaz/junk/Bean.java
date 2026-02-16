/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2009-2026 Hazendaz
 */
package com.hazendaz.junk;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.ValidatorException;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.servlet.http.Part;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import lombok.Data;

@Data
@Named
@ViewScoped
public class Bean {
    private Part file;
    private String fileContent;

    /**
     * Upload bean using standard jsf
     */
    public void upload() {
        try {
            this.fileContent = new Scanner(this.file.getInputStream()).useDelimiter("\\A").next();
        } catch (final IOException e) {
            final FacesMessage msg = new FacesMessage(FacesMessage.SEVERITY_ERROR, "error uploading file", null);
            FacesContext.getCurrentInstance().addMessage(null, msg);
        }
    }

    /**
     * Validate file upload using standard jsf
     *
     * @param ctx
     *            faces context
     * @param comp
     *            ui component
     * @param value
     *            object
     */
    public void validateFile(final FacesContext ctx, final UIComponent comp, final Object value) {
        final List<FacesMessage> msgs = new ArrayList<>();
        final Part part = (Part) value;
        if (part.getSize() > 1024) {
            msgs.add(new FacesMessage("file too big"));
        }
        if (!"text/plain".equals(part.getContentType())) {
            msgs.add(new FacesMessage("not a text file"));
        }
        if (!msgs.isEmpty()) {
            throw new ValidatorException(msgs);
        }
    }
}
