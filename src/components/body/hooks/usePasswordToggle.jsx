import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function usePasswordToggle() {
    const [visible, setVisibility] = useState(false);

    const icon = visible ? (
        <FontAwesomeIcon
            icon={faEye}
            onClick={() => setVisibility(false)}
        ></FontAwesomeIcon>
    ) : (
        <FontAwesomeIcon
            icon={faEyeSlash}
            onClick={() => setVisibility(true)}
        ></FontAwesomeIcon>
    );

    const inputType = visible ? "text" : "password";

    return [inputType, icon];
}

export default usePasswordToggle;
