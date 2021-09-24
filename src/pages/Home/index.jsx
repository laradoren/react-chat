import React, {useState} from "react";
import {
    FormOutlined,
    TeamOutlined,
    EllipsisOutlined,
    SmileOutlined,
    PictureOutlined,
    AudioOutlined, SendOutlined
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {Input} from "antd";

import "./Home.scss";
import {Message, Status} from "../../components";
import {Dialogs} from "../../containers";
import audio from "./../../assets/audio/ZeeMan - Ханс Циммер уважает пчелок.mp3";
import Messages from "../../components/Messages";

let image = "https://www.ixbt.com/img/n1/news/2021/1/0/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2.png";
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let message = {
    _id: Math.random(),
    text: text,
    date: new Date(2021, 7, 1, 12, 13, 60),
    isReaded: true,
    user : {
        _id : "34297DFAD3FD6C14C0461211ED59AADF8E4A0D09A9D0244B0E39E8E49D0DA928",
        fullname : "Alina Halushko",
        avatar: image,
        isOnline: true
    }
}

let message1 = {
    _id: Math.random(),
    text: text,
    date: new Date(2020, 7, 1, 12, 13, 60),
    isReaded: false,
    isMe: false,
    user : {
        _id : "0-f04076C52B93DC697C90910C583DD123F6A652E68EC351A897F3B450EC657E9",
        fullname : "Marina Borshd",
        avatar: null,
        isOnline: false
    }
}

let message2 = {
    _id: Math.random(),
    text: text,
    date: new Date(2021, 7, 19, 12, 13, 60),
    isReaded: false,
    isMe: true,
    user : {
        _id : ".0D5E0ED1603E50E9BC7F5BA6D847C87D1871D3B0D10423DAD372EDF74C15C16",
        fullname : "Kiril Vasilin",
        avatar: null,
        isOnline: true
    }
}

const user = {
    _id : "2up2A3D51718078FAD267A7C48566FA300259B9942F88F7045B30356EE78A012",
        fullname : "Hlushko",
        avatar: null
}

const user2 = {
    _id : "qq423353F9036ABB9532AC10E8E51B72E7614B51E2285089381940F19CA349",
    fullname : "Alinka",
    avatar: null
}


const Home = (props) => {
    const [value, setValue] = useState("");

    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined />
                            <span>Dialogs list</span>
                        </div>
                        <FormOutlined />
                    </div>
                    <Dialogs items={[
                        message, message1, message2
                    ]} userId={1} />

                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="chat__dialog-header-block"></div>
                        <div className="chat__dialog-header-info">
                            <b className="chat__dialog-header-username">Alina Halushko</b>
                            <Status status={false}/>
                        </div>
                        <div className="chat__dialog-header-more">
                            <EllipsisOutlined />
                        </div>
                    </div>
                    <div className="chat__dialog-current">
                       <Messages array={[
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           },
                           {
                               user: user2,
                               text: text
                           }
                       ]} />
                    </div>
                    <div className="chat__dialog-input">
                        <div className="chat__dialog-input-icon">
                            <SmileOutlined />
                        </div>
                        <div className="chat__dialog-input-form">
                            <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter the message" />
                        </div>
                            <div className="chat__dialog-input-icon">
                                <PictureOutlined />
                            </div>
                            {value
                                ?  <div className="chat__dialog-input-icon">
                                    <SendOutlined />
                                </div>
                                :  <div className="chat__dialog-input-icon">
                                    <AudioOutlined />
                                </div>}
                    </div>
                </div>
            </div>



        </section>
    );
};


export default Home;


