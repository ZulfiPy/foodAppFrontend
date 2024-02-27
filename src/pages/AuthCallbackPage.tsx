import useCreateMyUser from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();
    const navigate = useNavigate();
    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            console.log('mounts', hasCreatedUser.current)
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;
            console.log('ends mounting', hasCreatedUser.current)
        };
        navigate('/');
    }, [createUser, navigate, user]);

    return <>Loading...</>;
}

export default AuthCallbackPage;