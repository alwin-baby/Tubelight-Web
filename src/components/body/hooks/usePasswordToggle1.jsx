import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const usePasswordToggle1 = () => {
    const [ visible , setVisibility] = useState(false) ;
                                            
    const Icon1 = (
         <FontAwesomeIcon
            icon = {visible ? faEye : faEyeSlash}
            id="icon1"
            onClick={ ()=> setVisibility (visibility => !visibility )}
            />
    );

    const InputType1 = visible ? "text" : "password" ;
    

    return [InputType1,Icon1] ;
    };
    export default usePasswordToggle1;
