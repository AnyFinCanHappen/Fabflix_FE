import Socket from "../Socket";
import Constants from "../../Constants.json";
async function searchEndpoint(headers,query){
    const config = {headers:headers, params: query};
    return await Socket.sendGETHTTP(Constants.moviesUrl, Constants.moviesEndpoints.search , config);
}
export default searchEndpoint;