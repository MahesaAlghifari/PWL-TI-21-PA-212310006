import React, { useMemo, useState } from "react";
import { AccountLong } from "../components/AccountUI";
import { ButtonIcon, ButtonSearch } from "../components/ButtonUI";
import { Link } from "react-router-dom";
import { Messegers } from "../constantas/DataChat";

export function ContactUI({ my_account, friends, setSelectedUser, setSelectedChat, HandlerSelectedChat }) {
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [search, setSearch] = useState("");

    const toggleSorting = (field) => {
        if (sorting.field === field) {
            setSorting({
                ...sorting,
                order: sorting.order === 'asc' ? 'desc' : 'asc'
            });
        } else {
            setSorting({
                field: field,
                order: 'asc'
            });
        }
    };

    const resultData = useMemo(() => {
        let computedData = friends;
        if (search) {
            computedData = computedData.filter(
                listData => {
                    return Object.keys(listData).some(key =>
                        listData[key].toString().toLowerCase().includes(search.toLowerCase())
                    );
                }
            );
        }
        return computedData;
    }, [friends, search]);

    return (
        <div className="card card-flush h-100 mb-5 mb-xl-10 rounded-0 rounded-start-1">
            <div className="card-header">
                <div className="card-title">
                    <AccountLong data={my_account} color={"danger"} />
                </div>
                <div className="card-toolbar">
                    <Link to={"/sign-out"} className="btn btn-icon btn-sm" title="Sign out" >
                        <i className="bi bi-box-arrow-right text-danger fw-bold fs-2x"></i>
                    </Link>
                </div>
            </div>
            <div className="card-body d-flex flex-column justify-content-between p-0">
                <div className="my-contact border-top">
                    <div className="filters p-5 border-bottom d-flex align-items-center">
                        <ButtonSearch setSearch={setSearch}>
                            <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-1">
                                <i className="bi bi-search"></i>
                            </span>
                        </ButtonSearch>
                        <ButtonIcon
                            title={`Sorting ${sorting.order}`}
                            onAction={() => toggleSorting('name')}
                        >
                            <i className="bi bi-filter fw-bold fs-2x"></i>
                        </ButtonIcon>
                    </div>
                    <div className="friends">
                        <p className="text-center">list kontak dimari</p>
                        {Object.values(resultData).length > 0 ? (
                            resultData.map((v, index) => (
                                <div 
                                    className={"friend-item"}
                                    key={index}
                                    onClick={() => HandlerSelectedChat(v)}
                                >
                                    <AccountLong data={v} color={"info"} />
                                </div>
                            ))
                        ) : "No Data Found!"}
                    </div>
                </div>
                <p className="fs-8 text-center mb-0 py-3">
                    <i className="bi bi-lock-fill"></i>
                    <span className="ms-1">Your personal messages are <span className="text-info">end-to-end encrypted</span></span>
                </p>
            </div>
        </div>
    );
}
