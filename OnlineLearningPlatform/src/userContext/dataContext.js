import { useContext, createContext } from "react";

const DataContext = createContext(null)

export const DataProvider = DataContext.Provider ;

export const useData = () => {
    return useContext(DataContext) ;
}
// export const function useData(){
//     return useContext(UserContext) ;
// }
export default DataContext ;