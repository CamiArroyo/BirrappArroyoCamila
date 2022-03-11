import React from "react";
import { auth } from "../../firebase";

const UserLoggedIn = () => {
    const { displayName } = auth.currentUser;

    return (
        <>
            <div style={{marginTop:8}}>
                {displayName}
            </div>
        </>
    );
}

export default UserLoggedIn;