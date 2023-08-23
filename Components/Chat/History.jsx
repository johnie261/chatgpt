import React from 'react'
import { MdPaid } from 'react-icons/md'

const History = () => {
  return (
    <div 
      className='tab-pane fade' 
      id='history' 
      role='tabpanel'
      aria-aria-labelledby="history"
      tabIndex="0"
    >
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggle d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className='iconsax' data-icon="text-align-justify"></i>
            </button>

            <a href="/" className='logo-icon d-flex d-md-none'>
              <img src="assets/svg/logo.svg" className="img-fluid" alt=""/>
            </a>
            <h3>History</h3>
          </div>
          <a href="/" className="premium-btn" data-cursor="pointer">
            <i className='iconsax' data-icon="crown-2"></i>
            <MdPaid /> Get <span>Premium</span>
          </a>
        </div>

        <div className='main-section'>
          <div className="container card p-0">
            <div className="card-header">
              <h3 className="text-white">
                Detailed History
              </h3>
              <form className="auth-form d-none d-md-block">
                <div className="form-group">
                  <i className='iconsax' data-icon="search-normal-2"></i>
                  <input 
                    type="search"
                    placeholder="Search here"
                    className="form-control"
                  />
                </div>
              </form>
            </div>

            <div className='card-body px-sm-4 px-3'>
              <ul className="history-sec">
                {[1,2,3,4,5,6,6,7].map((el, i)=> (
                  <li key={i+1} className="history-main">
                    <div className="history-detail text-truncate">
                      <i className='iconsax' data-icon="message-text"></i>
                      <div>
                        <p>What is app dev</p>
                        <p className='d-sm-none d-inline'>2 min ago</p>
                      </div>
                    </div>

                    <div className="history-time d-sm-flex d-none">
                      <ul>
                        <li>Chat</li>
                        <li>2 min ago</li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History