import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message:MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5RKiPIpiQuSLgSB_WCKWHgB_aWpozzvvnw&usqp=CAU'

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                       
                      Jon
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        Hello, she didn’t do anything and rested all day, how are you?
                        {/**/}
                    </pre>
                   
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                22:30

                {/**/}
            </div>
        </div>
    )
}

export default Message
