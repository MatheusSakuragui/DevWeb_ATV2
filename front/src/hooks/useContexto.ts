import { useContext } from "react";
import { MyContext } from "../contexts";

function useContexto() {
    const context = useContext(MyContext);
    return context;
}

export default useContexto;