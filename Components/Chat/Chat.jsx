import React, { useState, useEffect } from 'react';
import { BiMenu } from "react-icons/bi";
import { MdPaid } from "react-icons/md";

import { Form } from './index';
import { useStateContext} from '../../Context/index'
import Formy from './Formy';

const Chat = () => {
  const [active, setActive] = useState("Ask anything");
  const [hide, setHide] = useState(true);
  const [proMember, setProMember] = useState({});
  const [freeTrail, setFreeTrail] = useState();

  const { Free, address } = useStateContext();

  const close = (e) => {
    e.preventDefault()
    setHide(false);
  }

  const productList = [
    "Ask anything",
    "Content writer",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Personal advise",
    "Password generator",
    "Travel/hangout",
    "Essay writer"
  ]

  const loadData = () => {
    const UserDetail = localStorage.getItem("Userdetails");
    const member = JSON.parse(UserDetail);
    setProMember(member)

    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail)
    console.log("mimi", proMember)
  }

  useEffect(() => {
   loadData()
  }, []);

  const display = Free?.replace(/['"]+/g, "")
 
  return (
    <div
      className="tab-pane fade show active" 
      id="chat"
      role="tabpanel"
      aria-labeledby="chat"
      tabIndex="0"
    >
      <div className="main-wrapper">
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <button
            className="navbar-toggler d-none"
            type="button"
            data-ds-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggel navigation"
          >
            <BiMenu className='mobil_custom_menu'/>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="inner-menu-panel">
              <button
                data-be-toggle="collapse"
                data-bs-target="#navbarNav"
                className="inner-close d-block d-lg-none"
              >
                Back
              </button>

              <div className="search-box">
                <i className="iconsax" data-icon="search-normal-2"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your question"
                />
              </div>

              <ul className='inner-links-list' id="innerLink">
                {productList.map((product, i) => (
                  <li
                    key={i+1}
                    onClick={() => setActive(product)}
                    className={product == active ? "active" : ""}
                  >
                    <a href="#!" data-title="Ask anything">{product}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

         <div className='chat-header'>
           <div className="d-flex align-items-center gap-2">
             <button
              className='navbar-toggler d-md-none d-block'
              data-ds-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggel navigation" 
             >
              <BiMenu className="mobil_custom_menu" />
             </button>
             <a href="/" className="logo-icon d-flex d-md-none">
              <img 
                src="assets/svg/logo-icon.svg"
                className="img-fluid"
                alt=""
              />
             </a>
             <h3 id="targetDiv">{active}</h3>
           </div>

           <div className="header-option">
             {display == "ProMember" ? (
              <a href="#">{display}</a>
             ) : (
              <a className="del-btn" data-cursor="pointer" href="#">
                Free Left (<span id="freeTry">{Free || 0}</span>)
              </a>
             )}

             <a
               href="#!"
               className="premium-btn"
               id="subscriptionBtn"
               data-cursor="pointer"
             >
              <MdPaid /> Get <span>premium</span>
             </a>
           </div>
         </div>

         <div className="main-chat">
           <div className='no-chat'>
            {hide ? (
              <div>
                <img 
                  src="assets/svg/no-chat.svg"
                  className="img-fluid"
                  alt=""
                />
                <h3>{active == "Ask anything" ? "" : "Ask"}</h3>
              </div>
            ) : (
              ""
            )}
           </div>
         </div>

         <div className="" id="chat_container"></div>

         <Form
           close={close}
           proMember={proMember}
           address={address}
           freeTrail={freeTrail}
         />

         {/* <Formy /> */}

      </div>
    </div>
  )
}

export default Chat