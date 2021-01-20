const AboutAuthor = (props) => {
    return <div>
        <h2>Name: {props.name}</h2>
        <h3>Surname: {props.surname}</h3>
        <h3>Age: {props.age}</h3>
        <h3>University: {props.university}</h3>
    </div>
}

export default AboutAuthor;