import React from 'react'
import './css/ChatBot.css'
import chatImg from '../../img/icons/chat-icon.png'

const ChatBot = () => {
    return (
        <>
            <div className='chat-bot-btn'>
                <img src={chatImg} alt="" />
            </div>
            <div className='chat-bot-window'>
            </div>
        </>
    )
}

export default ChatBot
