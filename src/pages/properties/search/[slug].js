import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import { useState, useEffect } from 'react';
// import { singleProperty, listRelated } from '../../actions/blog';
import { singleProperty, listRelated } from '../../../actions/propertyAction';
import moment from 'moment';
import SmallCard from '../../../components/blog/SmallCard';
import DisqusThread from '../../../components/DisqusThread';
import SearchBox from '../../../components/shared/SearchBox';
import SinglePropertyCard from '../../../components/property/SinglePropertyCard';

const SingleProperty = ({property, query}) => {
    const router = useRouter()
    const [related, setRelated] = useState([]);
    // const [property, setProperty] = useState([]);
    // const loadRelated = () => {
    //     listRelated({ blog }).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setRelated(data);
    //         }
    //     });
    // };
    console.log('Router..', property)

    // useEffect(async () => {
    //     // loadRelated();
    //     const payload = router.query.slug;
    //     const data = await singleProperty(payload);
    //     .then((err, data) => {
    //         console.log("Response", data)
    //         if (true) {
    //             setProperty(data);
    //             console.log("ERROR..",data);
    //         } else {
    //             console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
    //             return data
    //         }
    //     });
    // }, [router.query]);

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`} />
            </div>
        );
    };

    return (
        // <React.Fragment>
        //     {head()}
        <React.Fragment>
             <Layout>
                 <SearchBox hideBanner/>
-                <SinglePropertyCard propertyData={property}/>
                 <main>
                     <div className="container-fluid">
                         <section>
                             <h1>Property Name: {property.propertyname}</h1>
                         </section>
                         </div>
                </main>
             </Layout>
         </React.Fragment>
    );
};
SingleProperty.getInitialProps = ({ query }) => {
    return singleProperty(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { property: data.property, query };
        }
    });
};
// SingleProperty.getServerSideProps = ({ query }) => {
//     return singleProperty(query.slug).then((err, data) => {
//         console.log("Response", data)
//         if (data) {
//             console.log("ERROR..",data);
//         } else {
//             console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
//             return { property: data, query };
//         }
//     });

//     // const res = await singleProperty(query.slug);
//     // console.log("Response", res)
//     // const json = await res.json()
//     // return { stars: json.stargazers_count }
// };

export default SingleProperty;
