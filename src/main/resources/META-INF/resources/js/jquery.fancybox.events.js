/*
 * fileUploadResources (https://github.com/hazendaz/fileUploadResources)
 *
 * Copyright 2009-2023 Hazendaz.
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

    function fancyAlert(msg) {
        $.fancybox({
            modal : true,
            content : "<div style=\"margin:1px;width:240px;\">"
                    + msg
                    + "</div>"
                    + "<div style=\"text-align:right;margin-top:10px;\">" +
                    + "<input style=\"margin:3px;padding:0px;\" type=\"button\" onclick=\"$.fancybox.close();\" value=\"Ok\">"
                    + "</div>"
        });
    }

    function fancyConfirm(msg,callback) {
        var ret;
        $.fancybox({
            modal : true,
            content : "<div style=\"width:220px;height:80px;\">"
                    + "<b>" + msg + "</b>"
                    + "</div>"
                    + "<div style=\"text-align:center;margin-top:20px;\">"
                    + "<input id=\"fancyConfirm_ok\" style=\"margin:3px;padding:1px;width:75px;height:20px;\" type=\"submit\" value=\"Ok\">"
                    + "<input id=\"fancyConfirm_cancel\" style=\"margin:3px;padding:1px;width:75px;height:20px;\" type=\"button\" value=\"Cancel\">"
                    + "</div>",
            afterShow : function() {
                $("#fancyConfirm_cancel").click(function() {
                    ret = false;
                    $.fancybox.close();
                });
                $("#fancyConfirm_ok").click(function() {
                    ret = true;
                    $.fancybox.close();
                });
            },
            afterClose : function() {
                if ($.isFunction)
                    { callback.call(this, ret);}
            }
        });
    }

    $(document).on('click', '.confirmDelete', function(e) {
        fancyConfirm("Are you sure you want to delete this?", function(ret) {
            if (ret == true) {
                $(".confirmDeleteLink").click();
            }
        });
        return false;
    });

    $(document).on('click', '.confirmDuplicate', function(e) {
        fancyConfirm("Are you sure you want to duplicate this?", function(ret) {
            if (ret == true) {
                $(".confirmDuplicateLink").click();
            }
        });
        return false;
    });

    $(document).on('click', '.alertLink', function(e) {
        fancyAlert("You have pressed a cool key!");
        return false;
    });

});
