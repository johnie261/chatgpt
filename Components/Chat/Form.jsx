import React from 'react'
import { BiMenu } from "react-icons/bi"
import { MdSend } from "react-icons/md"
import { AiFillAudio, AiFillPicture } from "react-icons/ai"

const Form = ({close, proMember, address, freeTrail}) => {

  const today = Date.now();
  let data = new Date(today)
  const expiredate = data.toLocaleDateString("en-US")
  console.log("mem", proMember) // output 0x0000000000000000000000000000000000000000
  console.log("pro", proMember?.addressUser)
  console.log("date", proMember?.expiredate) //output undefined
  console.log("add", address)

  let addry = 0x0000000000000000000000000000000000000000;

  return (
    <form id="form_input_data" className="msger-inputarea">
      {/* {proMember?.addressUser == addry && proMember?.expiredate !== expiredate && (
        <>
        <button
            className="navbar-toggler d-lg-none d-block msger-send-btn"
            type="button"
            data-ds-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggel navigation"
          >
            <BiMenu className='icon_size'/>
        </button> 

        <input 
          type="text"
          name="prompt"
          className="msger-input"
          placeholder="Ask any question here.."
          rows="1"
          cols="1"
        />

        <a href="" className="scan-icon">
          <AiFillAudio className="icon_size" />
        </a>

        <a href="" className="mic-icon">
          <AiFillPicture className="icon_size" />
        </a>

        <button className='msger-send-btn' type="submit" onClick={(e)=>close(e)}>
          <MdSend className="icon_size" />
        </button>
        </>
      )}  */}

      {
        freeTrail <= 4 && (
          <>
        <button
            className="navbar-toggler d-lg-none d-block msger-send-btn"
            type="button"
            data-ds-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggel navigation"
          >
            <BiMenu className='icon_size'/>
        </button> 

        <input 
          type="text"
          name="prompt"
          className="msger-input"
          placeholder="Ask any question here.."
          rows="1"
          cols="1"
        />

        <a href="" className="scan-icon">
          <AiFillAudio className="icon_size" />
        </a>

        <a href="" className="mic-icon">
          <AiFillPicture className="icon_size" />
        </a>

        <button className='msger-send-btn' type="submit" onClick={(e)=>close(e)}>
          <MdSend className="icon_size" />
        </button>
        </>
        )
      }
    </form>
  )
}

export default Form