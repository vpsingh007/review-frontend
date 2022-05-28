import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import SearchBox from '../components/shared/SearchBox';
import RecentlyAddedReviews from '../components/reviews/RecentlyAddedReviews';

const Index = () => {
    return (
        <div>
            <Head>
                <title>India's Largest Review Site</title>
            </Head>
            <Layout>
                <SearchBox />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-9'>
                            <RecentlyAddedReviews />
                        </div>
                        <div className='col-sm-12 col-md-3'>Left Section</div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Index
