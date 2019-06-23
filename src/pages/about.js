import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>About Me</h1>
        <p>This page is about me</p>
        <Link to="/">&larr; back to home</Link>
    </Layout>
);