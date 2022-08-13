import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner">
      <Spinner animation="border" variant="primary" />
      </div>
      <style jsx>{`
        .loader-container {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          background: #dbd8d8;
          bottom: 0;
          opacity: 0.8;
          z-index: 10;

          .spinner {
            position: absolute;
            left: 50%;
            top: 45%;
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
