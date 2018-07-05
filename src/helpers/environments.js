let APIURL = ""

switch(window.location.hostname) {
    
    case "localhost":
        APIURL = "http://localhost:3000"
        break;

    case "rch-pernclient.herokuapp.com":
        APIURL = "https://rch-pernapi.herokuapp.com"
        break;

    default:
        APIURL = "http://localhost:3000"
        
}

export default APIURL