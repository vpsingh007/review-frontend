import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import Image from 'next/image'
const imgPath = '/Photo-1.jpg'
import { getCookie } from '../../services/auth';
import { updateSingleProperty } from '../../redux/actions/propertiesAction';
import { useAppDispatch } from '../../redux/hooks';
import ModalPopup from '../shared/ModalPopup';
// import { popupConfig } from '../../utils/PopupConfig';/
// import { ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE } from '../../utils/type';
// import { useContext } from 'react';
// import PopupContext from '../../components/context/popupContext';
import Icon from '../shared/Icons';
// import { reviewValidate } from '../validation/runValidate'

const reviewMockData = [
  {
    id: 1,
    createdBy: 'John Doe',
    createdOn: '22/10/2022',
    negativeData:
      'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData:
      'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.',
  },
  {
    id: 2,
    createdBy: 'John Doe2',
    createdOn: '21/10/2022',
    negativeData:
      'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData:
      'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.',
  },
  {
    id: 3,
    createdBy: 'John Doe3',
    createdOn: '23/10/2022',
    negativeData:
      'Incididunt magna minim do eu esse laborum elit cupidatat. Non veniam cillum commodo nostrud aliqua cupidatat qui velit officia quis duis quis. Deserunt quis ex cupidatat sit laborum do sit. Lorem cillum do laborum nulla magna adipisicing.',
    positiveData:
      'Culpa officia officia dolore aliqua in ipsum aute irure eu labore do nisi consequat. Mollit ea duis aute aute elit enim sint reprehenderit mollit aute mollit. Esse minim ullamco ut sint pariatur aliqua eu aute.',
  },
]
const SinglePropertyCard = ({ propertyData }): JSX.Element => {
    const singlePropertyData = propertyData;
    // const data = popupConfig["ADD_REVIEW_SUCCESS"];
    // const popupContxt = useContext(PopupContext);
    // const { setIsPopupOpen, setPopupData } = popupContxt;
  const [isReviewSectionVisible] = useState(true)
  // const [isFormSectionVisible, setIsFormSectionVisible] = useState(false)
  // const [rating, setRating] = useState(0)
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    reviewComment: '',
    rating: 0,
    error: {},
    isValid: false
  });
  const { userName, reviewComment, userEmail } = formData;
  const token = getCookie('token');
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const validateFormData = reviewValidate(formData);

    // setFormData({ ...formData, loading: true })
    const reviewData = { 
      rating: formData.rating,
      userName: formData.userName,
      userEmail: formData.userEmail,
      reviewComment: formData.reviewComment
     }
    dispatch(updateSingleProperty(singlePropertyData.slug, reviewData, token))

      // setIsFormSectionVisible(false);
  }

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value })
  }

  const singleRatingBlock = () => {
    return (
      <div className="d-flex flex-row">
        <div className="me-1">
          <span
            style={{ color: 'darkgoldenrod' }}
            className="material-symbols-outlined"
          >
            star
          </span>
        </div>
        <div className="me-1">4.0</div>
        <div className="me-1">Construction Quality</div>
      </div>
    )
  }

  const overallRatingBlock = (num) => {
    return (
      <>
        <div className="me-1 d-flex">
          {num}
          <span
            style={{ lineHeight: '20px', marginLeft: '5px' }}
            className="rating-star"
          >
            <Icon type={'star-yellow'} fill={'#62ca09'} />
          </span>
        </div>
        <div className="me-1"> ----------------- </div>
        <div className="me-1"> {returnRating(num)} </div>
        </>
    )
  }
  const returnRating = (star) => {
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
    return (
      <div>
        <div className="border rounded mb-4 p-4">
          <div className="d-flex flex-row justify-content-between mb-2">
            <div className="d-flex">
              <span className="material-symbols-outlined me-2">
                account_circle
              </span>
              <div>
                <span className="h6">
                  Post By : <span className="fst-italic">{data.createdBy}</span>
                </span>
                <div>Noida</div>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="h6">Posted On</div>
              <div>{data.createdOn}</div>
            </div>
          </div>
          <div style={{ marginLeft: '30px' }}>
            <div className="mb-2">
              <div className="d-flex">
                <span className="material-symbols-outlined me-1">check</span>
                <div style={{ color: 'green' }}>POSITIVE</div>
              </div>
              <div>{data.positiveData}</div>
            </div>
            <div className="mb-4">
              <div className="d-flex">
                <span className="material-symbols-outlined me-1">
                  dangerous
                </span>
                <div style={{ color: 'red' }}>NEGATIVE</div>
              </div>
              <div>{data.negativeData}</div>
            </div>
            {/* LIKES/SHARE */}
            <div className="d-flex">
              <span className="material-symbols-outlined me-1">thumb_up</span>{' '}
              Likes - {11}
              <span className="material-symbols-outlined me-1 ms-2">
                forward
              </span>{' '}
              Share
            </div>
            <div className="mt-3 d-flex">
              <span className="material-symbols-outlined me-2 mt-2">
                account_circle
              </span>
              <div className="input-group mb-3">
                <input
                  style={{ borderRadius: '18px' }}
                  type="text"
                  className="form-control"
                  placeholder="Add a comment"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const toggleReviewForm = () => {
    // console.log('review block', propertyname, _id)
    // setIsReviewSectionVisible(false)
    setIsPopupOpen(true)
    // setIsPopupOpen(true);
  }

  const handleRating = (rate: number) => {
    setFormData({ ...formData, rating: rate / 20 })
  }

  // const showModalPopup = () => {
  //   const data = popupConfig["ADD_REVIEW_SUCCESS"];
  //   setIsPopupOpen(true);
  //   console.log(data);
    // return (
    //   <ModalPopup isPopupOpen={true} setIsPopupOpen={true} popupData={data.popupData} />
    // )
  // }

  return (
    <div>
      {/* UPPER SECTION */}
      <ModalPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} title={`Add Review`} >
      <div className="formContainer m-auto w-100 p-4">
                <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <div className="star-rating">
                        <label>Star Rating: </label>
                        <Rating onClick={handleRating} ratingValue={formData.rating} /* Available Props */ />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <input
                    name={userName}
                    value={userName}
                    onChange={handleChange('userName')}
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                    autoComplete="off"
                    />
                    {/* {error && (
                      <div className="alert alert-danger">{error}</div>
                    )} */}
                </div>
                <div className="form-group mb-3">
                    <input
                    name={userEmail}
                    value={userEmail}
                    onChange={handleChange('userEmail')}
                    type="text"
                    className="form-control"
                    placeholder="Your Email Id"
                    autoComplete="off"
                    />
                </div>        
                <div className="form-group mb-3">
                    <textarea              
                        name={reviewComment}       
                        value={reviewComment}
                        onChange={handleChange('reviewComment')}
                        className="form-control"
                        placeholder="Add your feedback about this property"
                        autoComplete="off"
                    />
                </div>                
                <div>
                    <button className="btn btn-primary" disabled={formData.isValid}>Submit Your Feedback</button>
                </div>
                </form>
          </div>
      </ModalPopup>
      <div className="single-prop-container border-top border-bottom mb-4 px-2">
        <div className="p-2 row">
          <div className="p-4 col-sm-12 col-md-2">
            <Image
              src={imgPath}
              alt="property-image"
              width={120}
              height={150}
            />
          </div>
          <div className="p-4 col-sm-12 col-md-10">
            <div className="row mb-4">
              {/* HEADING AND BUTTON */}
              <div className="d-flex flex-column col-md-8">
                <span className="h2 propertyName">
                  {propertyData.propertyname}
                </span>
                <span className="h6">
                  {propertyData.sector}, {propertyData.city},{' '}
                  {propertyData.state}
                </span>
              </div>
              <div className="d-flex flex-column col-md-4">
                <div className="d-flex flex-row justify-content-end">
                  <button
                    className="btn btn-success mt-2 mb-4"
                    onClick={() => toggleReviewForm()}
                  >
                    Write a review
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {/* RATINGS */}
              <div className="d-flex flex-column col-sm-12 col-md-4">
                <span className="h5">Overall Ratings</span>
                <div className="d-flex flex-row">
                  <div>
                    {[5, 4, 3, 2, 1].map((el) => {
                      return <div className="d-flex flex-row" key={el}>{overallRatingBlock(el)}</div>
                    })}
                  </div>
                  <div className="mx-4">
                    <button className="btn btn-warning">Avg Rating</button>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column border-end col-sm-12 col-md-8">
                <span className="h5 mb-3">Ratings by features</span>
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column flex-wrap me-5">
                    {[1, 2, 3, 4, 5].map((el) => {
                      return <div key={el}>{singleRatingBlock()}</div>
                    })}
                  </div>
                  <div className="d-flex flex-column flex-wrap">
                    {[1, 2, 3, 4, 5].map((el) => {
                      return <div key={el}>{singleRatingBlock()}</div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-3">
        <div className="col-md-9 d-flex flex-column">
          {isReviewSectionVisible && (
            <React.Fragment>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Latest
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Oldest
                    </a>
                  </li>
                </ul>
              </div>
              {/* REVIEWS */}
              {reviewMockData.map((el) => {
                return <div key={el.id}>{returnReviewBlock(el)}</div>
              })}
            </React.Fragment>
          )}
          
        </div>
        <div className="col-md-3 d-flex flex-column">
          <div className="border p-4 rounded">
            <div className="d-flex flex-column mb-2">
              <div className="d-flex flex-row">
                <span className="h5">
                  Why you should consider {propertyData.propertyname} ?
                </span>
              </div>
            </div>

            <ul>
              <li>Located in heart of Dwarka sector 23</li>
              <li>Offers Customized Flats</li>
              <li>Offers top quality living at a very reasonable price</li>
            </ul>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <span className="h6">Developed By</span>
                <span className="h5">XYZ BUILDERS AND CO-OP</span>
                <button className="btn btn-primary">Contact Builder</button>
              </div>
              <div className="d-flex mx-4" style={{ alignItems: 'center' }}>
                <span className="material-symbols-outlined">account_box</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .propertyName {
          color: blue;
        }
        .formContainer {
            background-color: #fafafa;
            border: 1px solid #d5d5d5;
            border-radius: 3px;

            textarea.form-control {
              min-height: 150px;
            }
        }
        .star-rating button span {
            // color: yellow;
        }
      `}</style>
    </div>
  )
}

export default SinglePropertyCard
