import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {CaretRightFilled, PauseOutlined} from "@ant-design/icons";

import "./Message.scss";
import {IconIsReaded, Time, Avatar} from "../";
import wave from "./../../assets/images/wave.png";
import convertAudioTime from "../../utils/convertAudioTime";

const Message = ({image, user, text, date, isMe, isRead, attachments, isTyping, audio}) => {
    const [isPlaying, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioElem = useRef(null);
    useEffect(() => {
        if(audioElem.current) {
            audioElem.current.addEventListener("playing", () => {
                setPlaying(true);
            }, false);
            audioElem.current.addEventListener("ended", () => {
                setPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            }, false);
            audioElem.current.addEventListener("timeupdate", () => {
                let duration = audioElem.current && audioElem.current.duration || 0;
                setCurrentTime(audioElem.current.currentTime);
                setProgress((audioElem.current.currentTime / duration)*100);
            });
        }

    }, [])

    const tooglePlaying = () => {
        audioElem.current.volume = 0.1;
        isPlaying ? audioElem.current.pause() : audioElem.current.play();
        setPlaying(prev => !prev);
    }

    return (
        <div className={classNames("message", {
            "message--isme": isMe,
            "message--image": attachments && attachments.length === 1
        })}>
            <div className="message__content">
                <IconIsReaded isReaded={isRead} isMe={isMe}/>
                <div className="message__avatar">
                    <Avatar user={user} />
                </div>
                <div className="message__info">
                    <div>
                        {(audio || text || isTyping) && <div className={classNames("message__bubble", {
                            "message__bubble--typing": isTyping,
                            "message__bubble--audio": audio
                        })}>
                            {text && <p className="message__text">
                                {text}
                            </p>}
                            {isTyping && <>
                                <span></span>
                                <span></span>
                                <span></span>
                            </>}
                            {audio && <div className="message__audio">
                                <audio ref={audioElem} src={audio} preload="auto" />
                                <div className="message__audio-progress"
                                     style={{width: `${progress}%`}}>
                                </div>
                                <div className="message__audio-info">
                                    <div className="message__audio-btn">
                                        <button>
                                            {isPlaying
                                                ? <PauseOutlined style={{color: "white"}} onClick={tooglePlaying}/>
                                                : <CaretRightFilled style={{color: "white"}} onClick={tooglePlaying}/>
                                            }
                                        </button>
                                    </div>
                                    <div className="message__audio-wave">
                                        <img src={wave} alt="audio wave"/>
                                    </div>
                                    <span className="message__audio-duration">{convertAudioTime(currentTime)}</span>
                                </div>
                            </div>}
                        </div>}
                        <div className="message__attachments">
                            {
                                attachments && attachments.map(item => (
                                    <div className="message__attachments-item" key={item.url}>
                                        <img src={item.url} alt={item.filename}/>
                                    </div>
                                ))
                            }
                        </div>
                        <Time date={date}/>
                    </div>

                </div>
            </div>

        </div>
    )
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
    isTyping: PropTypes.bool,
    audio: PropTypes.string,
};

export default Message;