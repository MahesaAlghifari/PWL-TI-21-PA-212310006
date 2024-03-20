import React, { useState, useRef, useEffect } from 'react';
import { ButtonDelete, ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

export default function MessengersUI() {

    const colors = {
        dark1: '#1D1F2B',
        dark2: '#282C38',
        blue1: '#6D7EBD'
    };

    const styles = {
        card: {
            backgroundColor: colors.dark1
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            marginBottom: '0px'
        },
        cardTitle: {
            fontWeight: 'bold',
            color: colors.blue1,
            marginBottom: '8px',
            fontSize: '18px'
        },
        cardToolbar: {
            marginRight: '-8px'
        },
        chatBox: {
            minHeight: "45vh",
            maxHeight: "45vh",
            overflowY: "auto",
            backgroundColor: colors.dark1,
            scrollbarColor: `${colors.blue1} ${colors.dark2}`,
            scrollbarWidth: "thin"
        },
        chatSend: {
            padding: '12px'
        },
        chatInput: {
            borderColor: colors.dark2,
            backgroundColor: colors.dark2,
            color: 'white',
            flex: 1,
            marginRight: '8px',
        },
    };

    const [myChat, setMyChat] = useState([]);
    const [writeChat, setWriteChat] = useState("");
    const endOfMessagesRef = useRef(null);

    const chatArr = [
        {
            id: 1,
            message: "Selamat Datang di Aplikasi ChatBot, yang sopan ya!",
            from: "Mahesa",
            date: "2024-03-19 10:30:00"
        },
    ];

    const handleSendChat = (e) => {
        e.preventDefault();
        const objChat = {
            id: 2,
            message: writeChat,
            from: "Ghifari",
            date: moment().format('YYYY-MMM-DD HH:mm')
        }
        setMyChat([...myChat, objChat]);
        setWriteChat("");
    }

    useEffect(() => {
        scrollToBottom();
    }, [myChat]);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const handleDeleteChat = () => {
        // Implementasi untuk menghapus chat
        // Misalnya:
        setMyChat([]); // Menghapus semua chat dari state
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={styles.card}>
                        <div className="card-header" style={styles.cardHeader}>
                            <h3 className="card-title" style={styles.cardTitle}>
                                <i className="bi bi-envelope-fill"></i> MessegersUI
                            </h3>
                            <div className="card-toolbar" style={styles.cardToolbar}>
                                <ButtonDelete
                                    items={{
                                        title: "Delete chat",
                                        btn_class: "btn-icon btn-clear",
                                    }}
                                    onDelete={handleDeleteChat}
                                >
                                    <i className="bi bi-trash"></i>
                                </ButtonDelete>
                                <ButtonSecondary items={{
                                    title: "Create new chat",
                                    btn_class: "btn-icon btn-clear",
                                }}>
                                    <i className="bi bi-pencil-square"></i>
                                </ButtonSecondary>
                            </div>
                        </div>

                        <div className="card-body p-0">
                            <div className="chat-message" style={styles.chatBox}>
                                <ChatBody data={chatArr.concat(myChat)} />
                                <div ref={endOfMessagesRef} />
                            </div>

                            <div className="chat-send rounded" style={styles.chatSend}>
                                <form method="post" autoComplete="off" onSubmit={handleSendChat}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="text"
                                            className="form-control text-light "
                                            style={styles.chatInput}
                                            placeholder="Masukkan pesan Anda di sini!"  
                                            autoFocus={true}
                                            value={writeChat}
                                            onChange={(e) => setWriteChat(e.target.value)}
                                        />

                                        <ButtonPrimary items={{
                                            title: "Send",
                                            btn_class: "btn-icon btn-success",
                                            type: "submit"
                                        }}>
                                            <i className="bi bi-send"></i>
                                        </ButtonPrimary>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
