import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const usePasswordToggle2 = () => {
    const [ visible , setVisibility] = useState(false) ;
                                            

    const Icon2 = (
        <FontAwesomeIcon
           icon = {visible ? faEye : faEyeSlash}
           id="icon2"
           onClick={ ()=> setVisibility (visibility => !visibility )}
           />
   );

    const InputType2 = visible ? "text" : "password" ;

    return [InputType2,Icon2] ;
    };
    export default usePasswordToggle2;
