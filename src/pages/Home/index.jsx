import React, {useState} from "react";
import {
    FormOutlined,
    TeamOutlined,
    EllipsisOutlined
} from "@ant-design/icons";


import "./Home.scss";
import {ChatInput, Status} from "../../components";
import {Dialogs, Messages} from "../../containers";

const Home = (props) => {

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
                    <Dialogs items={[]} userId={1} />
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
                       <Messages  />
                    </div>
                    <ChatInput />
                </div>
            </div>



        </section>
    );
};


export default Home;


