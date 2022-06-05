import React from 'react';
const reviewMockData = [{
    id: 1,
    createdBy: 'John Doe',
    createdOn: '22/10/2022',
    negativeData: 'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData: 'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.'
}, {
    id: 2,
    createdBy: 'John Doe2',
    createdOn: '21/10/2022',
    negativeData: 'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData: 'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.'
}, {
    id: 3,
    createdBy: 'John Doe3',
    createdOn: '23/10/2022',
    negativeData: 'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData: 'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.'
}]
const SinglePropertyCard = ({propertyData}) => {
    const singleRatingBlock = () => {
        return (<div className='d-flex flex-row'>
            <div className='me-1'><span style={{color:'darkgoldenrod'}} className="material-symbols-outlined">
                star
            </span></div>
            <div className='me-1'>4.0</div>
            <div className='me-1'>Construction Quality</div>
        </div>)
    }

    const overallRatingBlock = (num) => {
        return (<div className='d-flex flex-row'>
            <div className='me-1 d-flex'>{num}<span style={{ color: 'green' }} className="material-symbols-outlined">
                star
            </span></div>
            <div className='me-1'>-----------------</div>
            <div className='me-1'>{returnRating(num)}</div>
        </div>)
    }
    const returnRating =(star)=>{
        switch (star) {
            case 5:
              return propertyData.starfive
            case 4:
                return propertyData.starfour
            case 3:
                return propertyData.starthree
            case 2:
                return propertyData.startwo
            case 1:
                return propertyData.starone
            default:
              return 0
          }
    }

    const returnReviewBlock = (data) => {
        return (<div>
            <div className='border rounded mb-4 p-4'>
                <div className='d-flex flex-row justify-content-between mb-2'>
                    <div className='d-flex'>
                        <span className="material-symbols-outlined me-2">
                            account_circle
                        </span>
                        <div>
                            <span className='h6'>Post By : <span className='fst-italic'>{data.createdBy}</span></span>
                            <div>Noida</div>
                        </div>

                    </div>

                    <div className='d-flex flex-column'>
                        <div className='h6'>Posted On</div>
                        <div>{data.createdOn}</div>
                    </div>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <div className='mb-2'>
                        <div className='d-flex'>
                            <span className="material-symbols-outlined me-1">
                                check
                            </span>
                            <div style={{ color: 'green' }}>POSITIVE</div>
                        </div>
                        <div>
                            {data.positiveData}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='d-flex'>
                            <span className="material-symbols-outlined me-1">
                                dangerous
                            </span>
                            <div style={{ color: 'red' }}>NEGATIVE</div>
                        </div>
                        <div>
                            {data.negativeData}
                        </div>
                    </div>
                    {/* LIKES/SHARE */}
                    <div className='d-flex'>
                        <span className="material-symbols-outlined me-1">
                            thumb_up
                        </span> Likes - {11}
                        <span className="material-symbols-outlined me-1 ms-2">
                            forward
                        </span> Share
                    </div>
                    <div className='mt-3 d-flex'>
                        <span className="material-symbols-outlined me-2 mt-2">
                            account_circle
                        </span>
                        <div className="input-group mb-3">
                            <input style={{ borderRadius: '18px' }} type="text" className="form-control" placeholder="Add a comment" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                </div>

            </div>

        </div>)
    }
    return (
        <div>
            {/* UPPER SECTION */}
            <div className='single-prop-container border-top border-bottom mb-4'>
                <div className='p-2 row'>
                    <div className='p-4 col-sm-12 col-md-2'>
                        <img
                            src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="property-image"
                            height="150"
                        />

                    </div>
                    <div className='p-4 col-sm-12 col-md-10' >
                        <div className='row mb-4'>
                            {/* HEADING AND BUTTON */}
                            <div className='d-flex flex-column col-md-8' >
                                <span className='h2'>{propertyData.propertyname}</span>
                                <span className='h6'>Plot No. C-3A, Sector 129 Jaypee Greens Wish Town, Noida, Uttar Pradesh 201306 Ghaziabad, Uttar Pradesh, India 201306</span>
                            </div>
                            <div className='d-flex flex-column col-md-4'>
                                <div className='d-flex flex-row justify-content-end'>
                                    <button className="btn btn-success mt-2 mb-4">Write a review</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {/* RATINGS */}
                            <div className='d-flex flex-column border-end col-sm-12 col-md-8'>
                                <span className='h5 mb-3'>Ratings by features</span>
                                <div className='d-flex flex-row'>
                                    <div className='d-flex flex-column flex-wrap me-5'>
                                        {[1, 2, 3, 4, 5].map(el => {
                                            return <div key={el}>{singleRatingBlock()}</div>
                                        })}
                                    </div>
                                    <div className='d-flex flex-column flex-wrap'>
                                        {[1, 2, 3, 4, 5].map(el => {
                                            return <div key={el}>{singleRatingBlock()}</div>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column col-sm-12 col-md-4'>
                                <span className='h5'>Overall Ratings</span>
                                <div className='d-flex flex-row'>
                                    <div>
                                        {[5, 4, 3, 2, 1].map(el => {
                                            return <div key={el}>{overallRatingBlock(el)}</div>
                                        })}
                                    </div>
                                    <div className='mx-4'>
                                        <button className='btn btn-warning'>Avg Rating</button>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>


            </div>
            {/* LOWER SECTION */}
            <div className='row mb-4'>
                <div className='col-md-9 d-flex justify-content-between'>
                    <span className='h2'> {propertyData?.reviews?.length} , Reviews found for this property</span>
                    {/* <button className="btn btn-secondary">Sort By Popular</button> */}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort By
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Popular</a></li>
                            <li><a className="dropdown-item" href="#">Latest</a></li>
                            <li><a className="dropdown-item" href="#">Oldest</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-3'>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-9 d-flex flex-column'>
                    {/* REVIEWS */}
                    {reviewMockData.map(el => {
                        return <div key={el.id}>{returnReviewBlock(el)}</div>
                    })}


                </div>
                <div className='col-md-3 d-flex flex-column'>
                    <div className='border p-4 rounded'>
                        <div className='d-flex flex-column mb-2'>
                            <div classame="d-flex flex-row">
                                <span className='h5'>Why you should consider {propertyData.propertyname} ?</span>
                            </div>

                        </div>

                        <ul>
                            <li>Located in heart of Dwarka sector 23</li>
                            <li>Offers Customized Flats</li>
                            <li>Offers top quality living at a very reasonable price</li>
                        </ul>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column'>
                                <span className='h6'>Developed By</span>
                                <span className='h5'>XYZ BUILDERS AND CO-OP</span>
                                <button className="btn btn-primary">Contact Builder</button>
                            </div>
                            <div className='d-flex mx-4' style={{ alignItems: 'center' }}>
                                <span className="material-symbols-outlined">
                                    account_box
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default SinglePropertyCard;