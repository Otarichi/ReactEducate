const logoStyle = {
    color: 'red',
    wheight: 'bold',
}


const logo = (props) => {
    return <h1 style={logoStyle} >{props.logoText}</h1>
}

export default logo;