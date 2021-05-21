import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';


const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:5000/blogs/' + id)
    const history = useHistory()

    const handleClick = _ => {
        fetch('http://localhost:5000/blogs/' + id, {
            method: 'DELETE'
        }).then(_ => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;