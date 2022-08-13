import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import Header from './Header'
import Loader from './shared/Loader';
import AutohideErrorToaster from './shared/ErrorToaster';

type LayoutProps = {
  children: any;
  loading: boolean;
  errorToaster: boolean;
  errorMessage: any;
}

const mapStateToProps = (state) => {
  return {
    loading: state.commonData.loading,
    errorToaster: state.commonData.errorToaster,
    successToaster: state.commonData.successToaster,  
    errorMessage: state.commonData.errorMessage,
    successMessage: state.commonData.successMessage,
  }
}

const Layout = ({ children, loading, errorToaster, errorMessage }: LayoutProps): JSX.Element => {
  
// const Layout = ({ children, loading, errorToaster, errorMessage }) => {
  useEffect(() => {
    if(loading) {
        document.querySelector('body').classList.add('hide-scrollbar')
    }else {
        document.querySelector('body').classList.remove('hide-scrollbar')
    }
  })
  // const loading = useSelector((state) => state.commonData.loading);
  console.log('redux state in layout..', loading)
  return (
    <div>
      <Header />
      {loading && <Loader />}
      {/* <div className="toast-container"> */}
        {errorToaster && <AutohideErrorToaster message={errorMessage} />}
      {/* </div> */}
      {/* <Loader /> */}
      <div className="container layout-container p-0">{children}</div>
      <style jsx>{`
        .toast-container {
          .toast {
            background-color: #ffffff !important;
            border: solid 2px #198754;
          }
          
          .toast-body {
            color: #4e4e4e;
          }
        }
        
      `}</style>
    </div>
  )
}

// export default Layout;
export default connect(mapStateToProps)(Layout)
