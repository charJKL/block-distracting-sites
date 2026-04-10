import { BackendComm as BackendCommApi } from "browser-extension-std/backend";

import { type REST } from "../protocol.ts";
const BackendComm = new BackendCommApi<REST>();


import { RulesService as RulesServiceImplementaion } from "./services/RulesService";




const RulesService = new RulesServiceImplementaion();









BackendComm.addEndpointListener("POST:/rules", function()
{
	console.log("BackendComm::POST:/rules", "response");
});


browser.tabs.create({url: "/frontend.html"}); // TODO for testing remove later.
