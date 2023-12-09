import { useState } from "react"
import "./index.css"

export const LoginForm = (props) => {
    const [name, nameSet] = useState()
    const [surname, surnameSet] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name || !surname) {
            return
        }
        props.login(name, surname)
    }
    
    const handleName = (event) => {
        nameSet(event.target.value)
    }

    const handleSurname = (event) => {
        surnameSet(event.target.value)
    }

    return(
        <div className="container">
            <p>Введіть ваше ім'я:</p>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Ім'я"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="text"
                    placeholder="Прізвище"
                    name="surname"
                    value={surname}
                    onChange={handleSurname}
                />
                <button type="submit">Увійти</button>
            </form>
        </div>
    )
}