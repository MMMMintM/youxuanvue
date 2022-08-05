import {get} from "@/http/axios";


export function findNavRouter(url,prams){
    return get(url,prams)
}