import Layout from '../../components/Layout';
// import Admin from '../../components/auth/Admin';
import Private from '../../components/auth/Private';
import CreateProperty from '../../components/property/CreateProperty';
// import Link from 'next/link';

const AddReview = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Add review</h2>
                        </div>
                        <div className="col-md-12">
                            <CreateProperty />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default AddReview;
