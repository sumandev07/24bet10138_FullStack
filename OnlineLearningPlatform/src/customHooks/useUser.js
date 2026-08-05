import { useData } from "../userContext/dataContext";

export default function useUser(){
    const { data } = useData() ;
    return data ;
}