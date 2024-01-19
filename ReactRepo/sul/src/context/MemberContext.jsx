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

    if(loginMember === null){
        const jsonStr = sessionStorage.getItem("loginMemberVo");
        console.log("jsonStr" , jsonStr);
        if(jsonStr !== null){
            const vo = JSON.parse(jsonStr);
            setLoginMember(vo);
        }
    }

    console.log("adminLoginMember" , adminLoginMember);
    if(adminLoginMember === null){
        const jsonStr = sessionStorage.getItem("loginAdminVo");
        console.log("jsonStr" , jsonStr);
        if(jsonStr !== null){
            const vo = JSON.parse(jsonStr);
            setAdminLoginMember(vo);
        }
    }

    return <MemberContext.Provider value={obj}>
        {children}
    </MemberContext.Provider>
}

export {MemberContext , MemberContextProvider};