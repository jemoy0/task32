import { useState } from "react"

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
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    gap: "10px",
                }}
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
                <button type="submit" style={{margin: "20px 0"}}>Увійти</button>
            </form>
        </div>
    )
}