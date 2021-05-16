import {useEffect, useState} from 'react';
import BlogList from './BlogList';

const Home = _ => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(_ => {
        fetch('http://localhost:5000/blogs')
            .then(res => {
                if (!res.ok) throw Error('could not fecth the data for dat resource')
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    },[])

    return ( 
        <div className="home">
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;
