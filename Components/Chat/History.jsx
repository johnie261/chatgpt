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
              data-ds-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggel navigation"
            >
              <i className='iconsax' data-icon="text-align-justify"></i>
            </button>

            <a href="/" className='logo-icon d-flex d-md-none'>
              <img src="assets/svg/logo.svg" className="img-fluid" alt=""/>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default History