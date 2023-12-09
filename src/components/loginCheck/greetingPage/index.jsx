export const GreetingPage = (props) => {
 return (
    <>
        <button 
            onClick={() =>
                props.setUser({...props.user, status: 0})
            }

            style={{
                position: "absolute",
                top: 10,
                left: 10
            }
            }
        >Вийти</button>
        <div>Вітаю, {props.user.name + " " + props.user.surname}!</div>
    </>
 )
}