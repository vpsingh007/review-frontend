import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
import { GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
// import Layout from '../../components/Layout';
// import { useState } from 'react';
import { listAllProperties } from '../../services/propertyAction';
// import Card from '../../components/blog/Card';
// import { DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import PropertiesList from '../../components/property/PropertiesList';
// import { type } from 'os';

type PropertiesProps = {
    properties: object
}

const Properties = ({ properties }: PropertiesProps): JSX.Element => {
    // const router = useRouter();
    // const head = () => (
    //     <Head>
    //         <title>Programming blogs | {APP_NAME}</title>
    //         <meta
    //             name="description"
    //             content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
    //         />
    //         <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
    //         <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
    //         <meta
    //             property="og:description"
    //             content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
    //         />
    //         <meta property="og:type" content="webiste" />
    //         <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
    //         <meta property="og:site_name" content={`${APP_NAME}`} />

    //         <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
    //         <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
    //         <meta property="og:image:type" content="image/jpg" />
    //         <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    //     </Head>
    // );

    // console.log('Router..', properties)
    // const [limit, setLimit] = useState(blogsLimit);
    // const [skip, setSkip] = useState(0);
    // const [size, setSize] = useState(totalBlogs);
    // const [loadedBlogs, setLoadedBlogs] = useState([]);
    // console.log(properties)

    // const loadMore = () => {
    //     let toSkip = skip + limit;
    //     listAllProperties(toSkip, limit).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setLoadedBlogs([...loadedBlogs, ...data.blogs]);
    //             setSize(data.size);
    //             setSkip(toSkip);
    //         }
    //     });
    // };

    // const loadMoreButton = () => {
    //     return (
    //         size > 0 &&
    //         size >= limit && (
    //             <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
    //                 Load mmore
    //             </button>
    //         )
    //     );
    // };

    // const showAllBlogs = () => {
    //     return blogs.map((blog, i) => {
    //         // ()
    //         return (
    //             <article key={i}>
    //                 <Card blog={blog} />
    //                 <hr />
    //             </article>
    //         );
    //     });
    // };

    // const showAllCategories = () => {
    //     return categories.map((c, i) => (
    //         <Link href={`/categories/${c.slug}`} key={i}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
    // };

    // const showAllTags = () => {
    //     return tags.map((t, i) => (
    //         <Link href={`/tags/${t.slug}`} key={i}>
    //             <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
    //         </Link>
    //     ));
    // };

    // const showLoadedBlogs = () => {
    //     return loadedBlogs.map((blog, i) => (
    //         <article key={i}>
    //             <Card blog={blog} />
    //         </article>
    //     ));
    // };

    return (
        <div>
            <PropertiesList propertiesList={properties} />
            <h1>hello vijay...</h1>
        </div>
        // <React.Fragment>
        //     {head()}
        //     <Layout>
        //         <main>
        //             <div className="container-fluid">
        //                 <header>
        //                     <div className="col-md-12 pt-3">
        //                         <h1 className="display-4 font-weight-bold text-center">
        //                             Programming blogs and tutorials
        //                         </h1>
        //                     </div>
        //                     <section>
        //                         <div className="pb-5 text-center">
        //                             {showAllCategories()}
        //                             <br />
        //                             {showAllTags()}
        //                         </div>
        //                     </section>
        //                 </header>
        //             </div>
        //             <div className="container-fluid">{showAllBlogs()}</div>
        //             <div className="container-fluid">{showLoadedBlogs()}</div>
        //             <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
        //         </main>
        //     </Layout>
        // </React.Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const skip = 0;
    const limit = 2;
    const response = await listAllProperties(skip, limit).then((data: any) => data);
    return {
        props: {
            properties: response
        }
    };
}


export default Properties;
