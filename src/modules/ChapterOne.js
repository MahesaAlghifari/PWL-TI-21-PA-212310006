import React, { Component } from 'react'
import MessegersUI from './widgets/messangers/MessengersUI'

export default class ChapterOne extends Component {
    render() {
        return (
            <div>
                <h4 className='text-white text-center mt-5'>
                   <b> Chapter one: The Messengers </b>
                </h4>
                <p className='text-secondary text-center mb-4' style={{ fontSize:"12px"}}>Tugas Praktikum 02 - Membuat Aplikasi Messenger</p>
                <MessegersUI />
            </div>
        )
    }
}
