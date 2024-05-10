import { useContext } from "react";
import { Context } from "../ContextAPI/AuthProvider";

const useAuth = () => {
    const all = useContext(Context)
    return all;
};

export default useAuth;