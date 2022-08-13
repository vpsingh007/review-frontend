import React, { useState } from 'react';
import Icon from './Icons';
// import { useAppDispatch } from '../../redux/hooks';

type AutohideErrorProps = {
  message: any
}

const AutohideErrorToaster = ({ message }: AutohideErrorProps): JSX.Element => {  
  // const dispatch = useAppDispatch();
  const [show, setShow] = useState(true);
  console.log(message)

  const clickHandler = () => {
    setShow(false)
  }

  return (
    <>
      {/* <Toast
          className="d-inline-block m-1"
          bg={'success'}
          onClose={() => setShow(false)} show={show}
        >
          <button type="button" className="btn-close closeBtn" onClick={() => setShow(false)} aria-label="Close" data-dismiss="toast"></button>
          <Toast.Body className='success text-white'>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast> */}
      {show && (
        <div className="wrapper">
        <div className="toaster error-bdr">
          <div className="outer-container">
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
          <Icon type={'circle-error'} />
          </div>
          <div className="inner-container">
            <p>Error</p>
            <p>Error has occured while saving changes.</p>
          </div>
          <button onClick={clickHandler}>X</button>
        </div>
      </div>
      )}
      <style jsx>{`
        .closeBtn {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #ffffff;
        }
        .wrapper{
          width: 380px;
          position: absolute;
          transform: translate(-50%,-50%);
          top: 50%;
          left: 50%;
          z-index: 12;
      }
      .toaster{
          width: 100%;
          height: 80px;
          padding: 15px 20px;
          background-color: #ffffff;
          border-radius: 7px;
          display: grid;
          grid-template-columns: 1.3fr 6fr 0.5fr;
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
      }
      .success{
          border-left: 3px solid #47D764;
      }
      .error-bdr{
          border-left: 3px solid #ff355b;
      }
      .info{
          border-left: 3px solid #2F86EB;
      }
      .warning{
          border-left: 3px solid #FFC021;
      }
      .error-bdr i{
          color: #ff355b;
      }
      .info i{
          color: #2F86EB;
      }
      .warning i{
          color: #FFC021;
      }
      .toaster:not(:last-child){
          margin-bottom: 20px;
      }
      .outer-container,.inner-container{
          align-self: flex-start;
      } 
      .outer-container i{
          font-size: 35px;
      }
      .success i{ 
          color: #47D764;
      }
      .inner-container p:first-child{
          color: #101020;
          font-weight: 600;
          font-size: 16px;
          margin: 0;
          padding: 0;
      }
      .inner-container p:last-child{
          font-size: 12px;
          font-weight: 400;
          color: #656565;
      }
      .toaster button{
          align-self: flex-start;
          background-color: transparent;
          font-size: 20px;
          color: #656565;
          line-height: 0;
          cursor: pointer;
          margin-right:-30px;
      }
      `}</style>
    </>
  )
}

export default AutohideErrorToaster
