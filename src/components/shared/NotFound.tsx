import React from 'react';
import Icon from './Icons';

type NotFoundProps = {
    errorMessage: any;
}

const NotFound = ({ errorMessage }: NotFoundProps): JSX.Element => {
    // const res = popupConfig[popupData.actionType];
    
//   const [isPopup, setIsPopup] = useState(isPopupOpen);
    // const [data, setData] = useState(res);
    // const modalData = () => {
        // const res = actionData();
        console.log(errorMessage);
    // }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto pt-5">
                    <h2 className='text-center text-muted'>No data found for this property</h2>
                    <p className='text-center text-muted'>Please try to search other property in search box.</p>
                    <div className='icon-box m-auto'>
                        <Icon type={'not-found'} />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .icon-box {
                    width: 400px;
                }
            `}</style>
        </div>
        </>
    );
};

export default NotFound;