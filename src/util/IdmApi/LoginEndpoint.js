import Socket from "../Socket";
import Constants from "../../Constants.json";
async function loginEndpoint(payload){
    return await Socket.sendPOSTHTTP(Constants.idmUrl, Constants.idmEndpoints.login,payload);
} 
export default loginEndpoint;