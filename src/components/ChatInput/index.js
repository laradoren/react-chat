import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Picker } from 'emoji-mart'

import "./ChatInput.scss";
import {AudioOutlined, PictureOutlined, SendOutlined, SmileOutlined} from "@ant-design/icons";
import {Input} from "antd";
import {UploadField} from "@navjobs/upload";

const ChatInput = () => {
    const [value, setValue] = useState("");
    const [isEmojiPanel, setEmojiPanel] = useState(false);

    const toogleEmojiPanel = () => {
        setEmojiPanel(!isEmojiPanel);
    }

    return (
        <div className="chat-input">
            <div className="chat-input-emoji">
                {isEmojiPanel && <Picker/>}
            </div>
            <div className="chat-input-icon" onClick={toogleEmojiPanel}>
                <SmileOutlined />
            </div>
            <div className="chat-input-form">
                <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter the message" />
            </div>
            <div className="chat-input-icon">
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: 'upload'
                    }}
                    uploadProps={{
                        accept: '.png,.jpg,.jpeg,.gif,.bmp',
                        multiple: "multiple"
                    }}>
                    <PictureOutlined />
                </UploadField>
            </div>
            {value
                ?  <div className="chat-input-icon">
                    <SendOutlined />
                </div>
                :  <div className="chat-input-icon">
                    <AudioOutlined />
                </div>}
        </div>
    )
}


ChatInput.propTypes = {

};

export default ChatInput;