import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';   
import { connect } from 'react-redux'
import Layout from '../../components/Layout';
// import { useState } from 'react';
// import { API, DOMAIN, APP_NAME } from '../../../config';
import { fetchSingleProperty } from '../../services/propertyAction';
import { setSinglePropertyData } from '../../redux/actions/propertiesAction';
import { useAppDispatch } from '../../redux/hooks';
// import moment from 'moment';
// import SmallCard from '../../components/blog/SmallCard';
// import DisqusThread from '../../components/DisqusThread';
// import SearchBox from '../../components/shared/SearchBox';
import SinglePropertyCard from '../../components/property/SinglePropertyCard';
import SearchBox from '../../components/shared/SearchBox';
import NotFound from '../../components/shared/NotFound';
// import { GetStaticPathsResult } from 'next';
export interface propertyData {
    slug: string;
    propertyname: string
}

type SinglePropertyProps = {
    property: propertyData;
    loading: any
    query: any
}

const mapStateToProps = (state) => {
    return {
        loading: state.commonData.loading,
    }
  }

const SingleProperty = ({ property, loading }: SinglePropertyProps): JSX.Element => {
    const dispatch = useAppDispatch();
    // const router = useRouter();
    // const _slugPath = router.query.slug;
    // const [related, setRelated] = useState([]);
    console.log("loading", loading)

    useEffect(() => {
        dispatch(setSinglePropertyData(property));
        // const response = ;
    });

    // const loadRelated = () => {
    //     listRelated({ blog }).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setRelated(data);
    //         }
    //     });
    // };
    // const head = () => (
    //     <Head>
    //         <title>
    //             {property.propertyname} | {APP_NAME}
    //         </title>
    //         {/*<meta name="description" content={property.mdesc} /> */}
    //         <link rel="canonical" href={`${DOMAIN}/properties/${query.slug}`} />
    //         <meta property="og:title" content={`${property.propertyname} | ${APP_NAME}`} />
    //         {/*<meta property="og:description" content={blog.mdesc} />*/}
    //         <meta property="og:type" content="webiste" />
    //         <meta property="og:url" content={`${DOMAIN}/properties/${query.slug}`} />
    //         <meta property="og:site_name" content={`${APP_NAME}`} />

    //         <meta property="og:image" content={`${API}/property/photo/${property.slug}`} />
    //         <meta property="og:image:secure_url" content={`${API}/blog/photo/${property.slug}`} />
    //         <meta property="og:image:type" content="image/jpg" />
    //     </Head>
    // );


    return (
        // <React.Fragment>
        //     {head()}
        <React.Fragment>
            <Layout>
                <main>
                        <div className="container-fluid p-0">
                            <section>
                                <SearchBox heading={false} />
                                {/* <h1>Property Name: {property.propertyname}</h1> */}
                                {Object.keys(property).length ? (
                                    <SinglePropertyCard propertyData={property} />
                                ) : (
                                    <NotFound errorMessage={'No data found'} />
                                )}
                                
                            </section>
                            </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

export const getServerSideProps = async ({ query }: any) => {
    const response = await fetchSingleProperty(query.slug);
    // console.log("response...", response.property)
    // const 
    return {
        props: {
            property: response.property
        }
    }
};

// export default SingleProperty;
export default connect(mapStateToProps)(SingleProperty)
