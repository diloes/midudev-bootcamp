const Mensaje = (props) => {
    console.log(props)
    return <h2 style={{color: props.color}}>
        {props.message}
    </h2>
}

export default Mensaje; 