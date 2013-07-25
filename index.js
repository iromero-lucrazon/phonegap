// Lucrazon MICA app code
// Copyright (c) 2013 Lucrazon ECommerce, Inc.

$(document).ready(function() {
   $('.actionButton').on("click",function(event) {
      if($('#appUserId').val() == "") {
          event.preventDefault();
          alert("Please enter your Merchant ID Key first!");
      }
   });
});

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
