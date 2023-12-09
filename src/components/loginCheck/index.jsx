import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { GreetingPage } from "./greetingPage";

export const LoginCheck = () => {
    const [user, setUser] = useState({status: 0})

    const login = (name, surname) => {
        setUser({status: 1, name: name, surname: surname})
    }

    return (
     <>
        {user.status ? (
        <GreetingPage setUser={setUser} user={user}/>
        ) : (
        <LoginForm login={login}/>
        )}
     </>
    )

    
}