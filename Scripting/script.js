
let hideHeaderLinks = false;
function hideLinks() {
    if(!hideHeaderLinks) {
    document.getElementById("hide_links").style.display = 'block';
    hideHeaderLinks = true;
    }
    else {
    document.getElementById("hide_links").style.display = 'none';
    hideHeaderLinks = false;
    }
}