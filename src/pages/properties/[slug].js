import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';

import SinglePropertyCard from '../../components/property/SinglePropertyCard';
import { fetchSingleProperty, listRelated } from '../../actions/propertyAction';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';


const SingleProperty = ({ property, query }) => {
    const [related, setRelated] = useState([]);

    // const loadRelated = () => {
    //     listRelated({ blog }).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setRelated(data);
    //         }
    //     });
    // };
    // console.log('Single Property..', property)
    const head = () => (
        <Head>
            <title>
                {property.propertyname} | {APP_NAME}
            </title>
            {/*<meta name="description" content={property.mdesc} /> */}
            <link rel="canonical" href={`${DOMAIN}/properties/${query.slug}`} />
            <meta property="og:title" content={`${property.propertyname} | ${APP_NAME}`} />
            {/*<meta property="og:description" content={blog.mdesc} />*/}
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/properties/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/property/photo/${property.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${property.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
        </Head>
    );

    return (
        // <React.Fragment>
        //     {head()}
        <React.Fragment>
        {head()}
            <Layout>
                <main>
                        <div className="container-fluid">
                            <section>
                                <SinglePropertyCard propertyData={property} />
                                
                            </section>
                            </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleProperty.getInitialProps = ({ query }) => {
    return fetchSingleProperty(query.slug).then(data => {
        if (data.error) {
            console.log(data);
        } else {
            console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { property: data.property, query };
        }
    });
};

export default SingleProperty;