import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Screen } from "../../Screen/Screen";

export const RequireAuth = ({children}: {children: JSX.Element}) =>{

    const auth = useContext(AuthContext);

    if(!auth.user){
        return <Screen/>
    }

    return children;
}