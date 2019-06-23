import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";
import usePosts from '../hooks/use-posts'

export default () => {
    const posts = usePosts();
    return (
    <Layout>
        <h1>Home</h1>
        <p>Here is the home page</p>
        <Link to="/about/">Learn about me &rarr;</Link>

        <h2>Read My Posts</h2>
        {posts.map(posts => (
          <pre>{JSON.stringify(posts, null, 2)}</pre>  
        ))}
    </Layout>
);}
