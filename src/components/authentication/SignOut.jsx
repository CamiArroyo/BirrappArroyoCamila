import React from "react";
import { auth } from "../../firebase";
import { Button } from 'react-bootstrap';

const SignOut = () => {
    return auth.currentUser && (
        <Button variant="secondary" style={{marginLeft:10, marginRight:10}} className="sign-out" onClick={() => auth.signOut()}>
            Cerrar sesión
        </Button>
    )
}

export default SignOut;