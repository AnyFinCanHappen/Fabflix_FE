import Socket from "../Socket";
import Constants from "../../Constants.json";

async function registerEndpoint(payload){
    return await Socket.sendPOSTHTTP(Constants.idmUrl, Constants.idmEndpoints.register, payload);
}

export default registerEndpoint;