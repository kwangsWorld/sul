import { createContext, useState } from "react";

const MemberContext = createContext();

const MemberContextProvider = ( {children} ) => {
    
    const [loginMember, setLoginMember] = useState(null);

    const obj = {
        loginMember ,
        setLoginMember ,
    };

    return <MemberContext.Provider value={obj}>
        {children}
    </MemberContext.Provider>
}

export {MemberContext , MemberContextProvider};