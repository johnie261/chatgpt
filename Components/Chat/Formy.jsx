import React from 'react'
import { BiMenu } from "react-icons/bi"
import { Mdsend } from "react-icons/md"
import { AiFillAudio, AiFillPicture } from "react-icons/ai"

const Formy = () => {

  return (
    <form id="form_input_data" className="msger-inputarea">
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
          send
        </button>
        </>
    </form>
  )
}

export default Formy