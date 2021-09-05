import React, {createContext, useState} from "react";

export const RoleContext = createContext();

export const RoleProvider = (props) =>{

    const [role, setRole] = useState(0);
    
    return(
        <RoleContext.Provider value={[role, setRole]}>
            {props.children}
        </RoleContext.Provider>
    )
}