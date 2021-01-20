const Post = (props) => {
    return <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.url} >view</a>
        <hr></hr>
    </div>
}

export default Post;