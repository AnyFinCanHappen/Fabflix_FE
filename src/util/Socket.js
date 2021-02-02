import Axios from "axios";

const HTTPMETHOD = Object.freeze({
    GET:"GET",
    POST:"POST",
});

function initSocket(baseUrl){
    Axios.defaults.baseURL = baseUrl;
}

async function sendGETHTTP(url,path,config){
    return await sendHTTPMethod(HTTPMETHOD.GET,url,path,null, config);
}

async function sendPOSTHTTP(url,path,data,config){
    return await sendHTTPMethod(HTTPMETHOD.POST,url,path,data,config);
}

async function sendHTTPMethod(method, url, path, data, config){
    let response;
    initSocket(url);
    switch(method){
        case HTTPMETHOD.GET:
            response = await Axios.get(path, config);
            break;
        case HTTPMETHOD.POST:
            response = await Axios.post(path,data,config);
            break;
        default:
            response = {
                "message": "Invalid HTTPmethod",
                "resultCode": -2
            };
    }
    return response;
}

const Socket = {
    sendGETHTTP,
    sendPOSTHTTP    
}

export default Socket;