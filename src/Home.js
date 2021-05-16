import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = _ => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:5000/blogs')

    // const handleDelete = (id) => {
    //     let newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    // handleDelete={handleDelete}

    return ( 
        <div className="home">
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;
