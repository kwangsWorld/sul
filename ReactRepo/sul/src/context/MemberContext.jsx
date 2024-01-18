import { createContext, useState } from "react";

const MemberContext = createContext();

const MemberContextProvider = ( {children} ) => {
    
    const [loginMember, setLoginMember] = useState(null);
    const [adminLoginMember , setAdminLoginMember] = useState(null);

    const obj = {
        loginMember ,
        adminLoginMember ,
        setLoginMember ,
        setAdminLoginMember ,
    };

    return <MemberContext.Provider value={obj}>
        {children}
    </MemberContext.Provider>
}

export {MemberContext , MemberContextProvider};