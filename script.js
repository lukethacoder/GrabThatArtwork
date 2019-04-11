let buttonGroup, specificGroup, imageButtonDiv, image, listOfUrls, theImageLink, fixedURL, newButton;

buttonGroup = document.querySelectorAll(".sc-button-group, .sc-button-group-medium");
specificGroup = buttonGroup[0];

imageButtonDiv = '<button type="button" id="getMyUrlImagePlease" class="sc-button-cta sc-button sc-button-medium sc-button-responsive" tabindex="0" aria-haspopup="true" role="button" aria-owns="dropdown-button-3255" title="More">Image Url</button>';
specificGroup.insertAdjacentHTML('afterend', imageButtonDiv);

function getMyImagePlease() {
    // returns "background-image: url("https://i1.sndcdn.com/avatars-000460662156-17m44t-t50x50.jpg"); width: 40px; height: 40px; opacity: 1;"
    // let image = document.querySelectorAll(".image, .m-sound, .image__lightOutline, .readOnly, .customImage, .interactive, .sc-artwork")[0].innerHTML;
    image = document.querySelectorAll(".listenArtworkWrapper")[0].querySelectorAll('.image > span')[0].style.backgroundImage;

    // returns list of image urls matching className 
    listOfUrls = image.match(/\b(https):\/\/(\S*)\b/);

    // returns the album artwork image
    theImageLink = listOfUrls[0];

    fixedURL = theImageLink.replace('&quot','');

    // opens the link in a new tab
    window.open(fixedURL);
}


// var newButton = document.getElementById(getmyurlimageplease).addEventListener("click", getMyImagePlease);
newButton = document.querySelector("#getMyUrlImagePlease").addEventListener("click", () =>  getMyImagePlease() );
console.log(fixedURL)