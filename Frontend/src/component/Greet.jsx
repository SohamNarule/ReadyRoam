export function Greet(props){
    return(
        <div>
            <h1>Hey {props.personName}, Good Afternoon</h1>
            <h2>Your email is: {props.email}</h2>
        </div>
    )
}