import React, {useState, useEffect} from 'react';
import { MdPaid } from 'react-icons/md'
import { useStateContext } from '../../Context/index'
const Subscription = () => {
  const { contractMembership, buyMembership } = useStateContext()

  const callMemberShip = async (membership_id) => {
    const bookMembership = await buyMembership(membership_id)
  }

  return (
    <div 
      className='tab-pane fade' 
      id='subscription' 
      role='tabpanel'
      aria-aria-labelledby="subscription"
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
            <h3>Subscription</h3>
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
                Choose plan
              </h3>
              <div className="header-option d-none d-md-flex">
                <label for="currency" className="form-label text-white">
                  Currency
                </label>
                <select
                  name=""
                  className="form-select"
                  aria-label="Default select example"
                  id="currency"
                >
                  <option selected>US Dollar</option>
                  <option value="1">EURO</option>
                  <option value="2">Pound</option>
                </select>
              </div>
            </div>

            <div className="card-body px-sm-4 px-3">
              <div className="row justify-content-center">
                {contractMembership?.map((membership, i) => (
                  <div key={i+1} className="col-xl-4 col-md-6 col-12">
                    <div className="card inner-card">
                      <div className="card-header">
                        <img 
                          src={`assets/svg/pricing/${
                            membership.membership_name == "One Month" ?
                            "weekly.svg" : membership.membership_name == "Six Months" ?
                            "monthly.svg" : "yearly.svg"
                          }`}
                          alt=""
                          className="img-fluid"
                        />
                        <h4 className="text-white mb-0">{membership.membership_name}</h4>
                      </div>
                      <div className="card-body">
                        <h3>{membership.membership_cost}</h3>
                        <ul>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                          <li>Intelligent AI Chatbot</li>
                        </ul>

                        <button
                          className="select-plan"
                          onClick={(e) => callMemberShip(membership.membership_id)}
                        >
                          select this plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="subscription-continue">
                <button className="no-select-plan select-plan">Continue</button>
                <a href="#" className="text-white">
                  Continue with limited version
                </a>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default Subscription