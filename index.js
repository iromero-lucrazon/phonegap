

function takePhoto() {            
    try {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(showPhoto,
                                function(message) { alert('get picture failed'); },
                                { 
                                    quality: 50, 
                                    destinationType: navigator.camera.DestinationType.FILE_URI,
                                    sourceType: navigator.camera.PictureSourceType.CAMERA 
                                }
                                );
    }
    catch (err) {
        alert(err);
    }
}

function selectPhoto() {            
    try {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(showPhoto,
                                function(message) { alert('get picture failed'); },
                                { 
                                    quality: 50, 
                                    destinationType: navigator.camera.DestinationType.FILE_URI,
                                    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY 
                                }
                                );
    }
    catch (err) {
        alert(err);
    }
}

function showPhoto(imageURI)    {
    $('#selectedImage').attr('src',imageURI);
}

function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    try {
        ft.upload(imageURI, "http://10.3.133.57:56115/", win, fail, options);
    }
    catch(err)   {
        alert(err);
    }
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}






/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//$('#page-home').live('pageinit', function(event){  
//    $('.api-div').hide();
//    $('.api-div#api-intro').show();
//    
//    $('#intro').click(function() {
//        $('.api-div').hide();
//        $('.api-div#api-intro').show();
//        $.mobile.silentScroll(0);            
//    });
//    
//    $('div ul li a').click(function(event) {
//        event.preventDefault();
//        //alert('clicked : ' + $(this).attr('id'));
//        var attrId = $(this).attr('id');
//
//        if (attrId.indexOf("click") !== 0) {
//            return;
//        }
//        
//        var api = '#api' + attrId.substring(attrId.indexOf('-'));
//        
//        // hide all div's, show only this one
//        $('.api-div').hide();
//        $(api).show();
//
//        // if small screen and portrait - close after tap
//        var disp = $('ul #listdivider').css("display");
//        //alert(disp + ' : ' + api);
//        if (disp === 'none') {
//            $('div.ui-collapsible').trigger("collapse");
//        } else {
//            $.mobile.silentScroll(0);            
//        }
//    }); 
//    
//    $('#listdivider').click(function(event) {
//        event.preventDefault();
//        $('.api-div').hide();
//        $('.api-div#api-intro').show();
//        $.mobile.silentScroll(0);
//    });
//});


