import React from "react";
import moment from "moment";

export default function ChatBody({ data }) {

    const colors = {
        dark1: '#1D1F2B',
        dark2: '#282C38',
        blue1: '#6D7EBD'
    };

    const style = {
        chatBubleItems: {
            display: "flex",
            flexDirection: "column",
        },
        chatBubleSender: {
            textAlign: "right",
            backgroundColor: colors.dark2,
            alignSelf: "flex-end",
            justifyContent: "flex-end",
            alignItems: "flex-start",
        },
        chatBubleReceiver: {
            backgroundColor: "blueviolet",
            alignSelf: "flex-start",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
        chatDateContainer: {
            width: "150px",
            margin: "auto",
            textAlign: "center",
            backgroundColor: colors.dark2,
        },
        chatDate: {
            fontSize: "12px",
            color: "grey",
            fontStyle: "italic",
            fontFamily: "Open Sans",
        },
        chatText: {
            fontSize: "12px",
            fontFamily: "Open Sans",
            padding: "0px",
            margin: "0px",
            lineHeight: "1px"
        },
        chatTime: {
            fontSize: "10px",
            fontFamily: "Open Sans",
        }
    };

    // Urutkan data berdasarkan tanggal rilis chat
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    let nowDisplayed = false;
    let lastDateDisplayed = null;

    return (
        <div className="chat-items px-3">
            {sortedData.map((v, index) => {
                const displayDate = !lastDateDisplayed || moment(v.date).format("YYYY-MM-DD") !== lastDateDisplayed;
                lastDateDisplayed = moment(v.date).format("YYYY-MM-DD");

                let showNow = false;
                if (!nowDisplayed && moment(v.date).isSame(new Date(), 'day')) {
                    nowDisplayed = true;
                    showNow = true;
                }
                return (
                    <div className="chat-item" style={style.chatBubleItems} key={index}>
                        {displayDate && (
                            <div className="chat-date-container rounded my-2 pb-1" style={style.chatDateContainer}>
                                <span className="chat-date" style={style.chatDate}>
                                    {showNow ? "Today" : moment(v.date).format("DD MMMM YYYY")}
                                </span>
                            </div>
                        )}
                        <div className="chat text-white rounded my-1 pb-1 px-3" style={(index % 2 === 0 ? style.chatBubleReceiver : style.chatBubleSender)}>
                            <span className="me-3" style={style.chatText}>{v.message}</span>
                            <span className="chat-time" style={style.chatTime}>
                                {moment(v.date).format("HH:mm")}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
