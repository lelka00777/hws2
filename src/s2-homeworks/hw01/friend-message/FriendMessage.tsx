import React from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from '../HW1'

// создать тип вместо any и отобразить приходящие данные

type FriendMessageProps={
    message:MessageType
}
const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqdI-G4-NgJLvdKf6B0-wbKviD3xzJNhcMg&usqp=CAU'
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                            {/*создаёт студент*/}
                            Alice
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Hello, how are you, what did you do yesterday?
                      
                        {/**/}
                    </pre>
                   
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                  23:00
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
