exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query{
            allMdx{
                nodes{
                    frontmatter{
                        slug
                    }
                }
            }
        }
    `);

    if(result.errors){
        reporter.panic('failed to create posts', result.errors);
    }

    const posts = results.data.allMdx.nodes;

    posts.forEach(post => {
        actions.createPages({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/posts.js'),
            context: {
                slug: `/${post.frontmatter.slug}`
            },
        });
    });
}