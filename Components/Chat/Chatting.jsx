import React from 'react'
import { Chat, History, SideBar, Subscription, Help, Sitting } from './index'

const Chatting = () => {
  return (
    <section className='chatting-wrapper pt-0'>
      <SideBar />
      <div className='tab-content'>
        <Chat />
        <History />
        <Subscription />
        <Help />
        <Sitting />
      </div>
    </section>
  )
}

export default Chatting