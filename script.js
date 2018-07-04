// add image url button 
var buttonGroup = document.getElementsByClassName("sc-button-group sc-button-group-medium");

var specificGroup = buttonGroup[0];

var imageButtonDiv = '<button type="button" id="getMyUrlImagePlease" class="sc-button-like sc-button sc-button-medium sc-button-responsive" tabindex="0" aria-haspopup="true" role="button" aria-owns="dropdown-button-3255" title="More">Image Url</button>';

specificGroup.insertAdjacentHTML('afterend', imageButtonDiv);

function getMyImagePlease() {
    console.log("function has been run");
    var image = document.getElementsByClassName("image m-sound image__lightOutline readOnly customImage interactive sc-artwork")[0].innerHTML;
    // returns "background-image: url("https://i1.sndcdn.com/avatars-000460662156-17m44t-t50x50.jpg"); width: 40px; height: 40px; opacity: 1;"

    var listOfUrls = image.match(/\b(https):\/\/(\S*)\b/);
    // returns list of image urls matching className 

    var theImageLink = listOfUrls[0];
    // returns the album artwork image

    var fixedURL = theImageLink.replace('&quot','');

    window.open(fixedURL);
    // opens the link in a new tab
}

// var newButton = document.getElementById(getmyurlimageplease).addEventListener("click", getMyImagePlease);
var newButton = document.getElementById("getMyUrlImagePlease").addEventListener("click", function() { getMyImagePlease(); });