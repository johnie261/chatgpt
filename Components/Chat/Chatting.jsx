import React, { useState, useEffect } from 'react';
import { BiMenu } from "react-icons/bi";
import { MdPaid } from "react-icons/md";

import { form } from './index';
import { useStateContext} from '../../Context/index'

const Chatting = () => {
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
    const UserDetail = localStorage.getItem("UserDetail");
    const member = JSON.parse(UserDetail);
    setProMember(member)

    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail)
    console.log(freeTrail)
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
            className="navbar-toggle d-none"
            type="button"
            data-ds-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggel navigation"
          >
            <BiMenu />
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
      </div>
    </div>
  )
}

export default Chatting