import React, { useState, useEffect } from 'react'
import { useStateContext } from '../../Context/index'
import { MdPaid } from 'react-icons/md'

const Sitting = () => {
  const [user, setUser] = useState()
  const [userNew, setUserNew] = useState({
    name: user?.name || "",
    surname: "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm: user?.passwordConfirm || ""
  })
  const { userMembership } = useStateContext()

  useEffect(() => {
    const str = localStorage.getItem("Userdetails");
    const parseObj = JSON.parse(str);

    if(parseObj?.name) {
      setUser(parseObj)
    }
  },[])

  const handleFormFieldChange = (fieldName, e) => {
    setUser({...userNew, [fieldName]: e.target.value})
  }

  const updateUser = () => {
    const jsonObj = JSON.stringify(userNew)
    localStorage.setItem("Userdetails", jsonObj)
    window.location.reload
  }

  return (
    <div 
      className='tab-pane fade' 
      id='setting' 
      role='tabpanel'
      aria-aria-labelledby="setting"
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
                My Account
              </h3>
            </div>

            <div className="card-body px-sm-4 px-3">
              <div className="my-account">
                <div className='user-detail'></div>
                <div className='user-main'>
                  <div className='user-profile'>
                    <img 
                      src="theblockchaincoders.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <i className='iconsax' data-icon='camera'></i>
                  </div>
                  <div className="user-option">
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>

                <form className="msger-inputarea mb-0">
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label for="firstname" className="form-label">
                          First Name
                        </label>
                        <input 
                          type="email"
                          id="firstname"
                          placeholder={user?.name}
                          onChange={(e)=>handleFormFieldChange("name", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label for="lastname" className="form-label">
                          Last Name
                        </label>
                        <input 
                          type="email"
                          id="lastname"
                          placeholder={user?.name}
                          onChange={(e)=>handleFormFieldChange("name", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label for="emailid" className="form-label">
                          Email Address
                        </label>
                        <input 
                          type="email"
                          id="emailid"
                          placeholder={user?.name}
                          onChange={(e)=>handleFormFieldChange("email", e)}
                          className="msger-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='card-footer'>
              <div className="setting-btn">
                <button 
                  className="select-plan"
                  onClick={() => updateUser()}
                >
                  Update
                </button>
                <button className='on-select-plan select-plan'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default Sitting