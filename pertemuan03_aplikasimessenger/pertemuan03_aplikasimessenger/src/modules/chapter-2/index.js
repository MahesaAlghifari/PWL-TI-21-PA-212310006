import React, { useState } from 'react';
import { Messegers, MyFriend } from "./widgets/constantas/DataChat";
import { ContactUI } from './widgets/contacts';
import MessengersUI from './widgets/messengers/MessengersUI';

export function ChapterTwo() {
    const myprofile = { id: "0419029203", name: "Febry" };
    const [selectedUser, setSelectedUser] = useState(0);
    const [selectedChat, setSelectedChat] = useState([]);

    const HandlerSelectedChat = (data) => {
        setSelectedUser(data);
        const the_msg = [...Messegers]
        const findChatByUserID = the_msg.find(item => item.user_id ===
            data.user_id)
        if (findChatByUserID) {
            setSelectedChat(findChatByUserID.messages);
        } else {
            setSelectedChat([]);
        }
    }

    return (
        <div id='chapter-2'>
            <div>
                <h4 className='text-white text-center mt-5'>
                    <b> Chapter Two: The Messengers </b>
                </h4>
                <p className='text-secondary text-center mb-4' style={{ fontSize: "12px" }}>Tugas Praktikum 03 - Membuat Aplikasi Messenger</p>
            </div>
            <div className='px-3'>
                <div className='row'>
                    <div className="col-2 col-lg-3 col-xxl-4 px-0">
                        {myprofile ? (
                            <ContactUI
                                my_account={myprofile}
                                friends={MyFriend}
                                selectedUser={selectedUser}
                                HandlerSelectedChat={HandlerSelectedChat}
                            />
                        ) : ""}
                    </div>
                    <div className="col-10 col-lg-9 col-xxl-8 px-0">
                        {myprofile ? (
                            <MessengersUI
                                profile={myprofile}
                                selectedUser={selectedUser}
                                selectedChat={selectedChat}
                            />
                        ) : ""}
                    </div>
                    ...
                </div>
            </div>
        </div>
    );
}



