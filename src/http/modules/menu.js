
import {get} from "@/http/axios";

export function findNavTree(url,params){
    return get(url,params);
}

export function findChildren(url,params){
    return get(url,params)
}