import { flow } from "./flow";
import { log } from "./log";
import { api } from "./api";

export const middleware = [flow, api, log];
