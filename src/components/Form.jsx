import React from 'react';
import '../app.css';
import { RiFilePaper2Fill, RiAppleFill, RiCloseFill } from "react-icons/ri";
import { BsFillSimFill, BsWifi } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { HiBadgeCheck } from "react-icons/hi";
import { SiBitcoin } from "react-icons/si";




const Form = () => {
    return (
        <div>
            <form className="popup flex p-[20px] pt-[26px] " >
        <div className="close-btn pointer flex-center p-sm ">
        <RiCloseFill />
        </div>
        
        {/* CARD FORM */}
        <div className="flex-fill flex-vertical">
        <div className="header flex-between flex-vertical-center">
            <div className="flex-vertical-center">
            <SiBitcoin className='text-[40px] text-blue-500  pr-2'/>
            <span className="title">
                
                <strong>AceCoin</strong><span>Pay</span>
            </span>
            </div>
            <div className="timer" data-id="timer">
            <span>0</span><span>1</span>
            <em>:</em>
            <span>1</span><span>9</span>
            </div>
        </div>
        <div className="card-data flex-fill flex-vertical">
            
            {/* Card Number */}
            <div className="flex-between flex-vertical-center">
            <div className="card-property-title">
                <strong>Card Number</strong>
                <span>Enter 16-digit card number on the card</span>
            </div>
            <div className="f-main-color pointer flex"><MdModeEditOutline className='text-[18px]'/> Edit</div>
            </div>
            
            {/* Card Field */}
            <div className="flex-between">
            <div className="card-number flex-vertical-center flex-fill">
                <div className="card-number-field flex-vertical-center flex-fill">
                <div className='flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
                    <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"/>
                </svg>
                <span className='text-[8px]'>mastercard</span>
                </div>
                <input className="numbers" type="number" min="1" max="9999" placeholder="0000"/>-
                <input className="numbers" type="number" placeholder="0000"/>-
                <input className="numbers" type="number" placeholder="0000"/>-
                <input className="numbers" type="number" placeholder="0000" data-bound="carddigits_mock" data-def="0000"/>
                </div>
                <HiBadgeCheck className='text-[25px] text-blue-500'/>
            </div>
            </div>


            {/* CVV Number */}
            <div className="flex-between">
            <div className="card-property-title">
                <strong>CVV Number</strong>
                <span>Enter the 3 0r 4 digit number on the card</span>
            </div>
            <div className="card-property-value">
                <div className="input-container">
                <input id="cvc" type="password"/>
                <TbGridDots className='text-[40px] pr-sm'/>
                </div>
            </div>
            </div>
            
            {/* Expiry Date */}
            <div className="flex-between">
            <div className="card-property-title">
                <strong>Expiry Date</strong>
                <span>Enter the expiration date of the card</span>
            </div>
            <div className="card-property-value flex-vertical-center">
                <div className="input-container half-width">
                <input className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1" max="12" step="1" placeholder="MM"/>  
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                <input className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23" max="99" step="1" placeholder="YY"/>
                </div>
            </div>
            </div>
            
            
            
            {/* Password */}
            <div className="flex-between">
            <div className="card-property-title">
                <strong>Password</strong>
                <span>Enter your Dynamic password</span>
            </div>
            <div className="card-property-value">
                <div className="input-container">
                <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="text" className="uppercase" placeholder="Password"/>
                <TbGridDots className='text-[40px] pr-sm'/>
                </div>
            </div>
            </div>
            
            
        </div>
        <div className="action flex-center">
            <button type="submit" className="b-main-color pointer">Pay Now</button>
        </div>
        </div>
        
        {/* SIDEBAR */}
        <div className="sidebar flex-vertical">
        <div>
            
        </div>
        <div className="purchase-section flex-fill flex-vertical">
            
            <div className="card-mockup flex-vertical">
            <div className="flex-fill flex-between">                
                <BsFillSimFill className='text-[25px]' />
                <BsWifi className='text-[25px]' />
            </div>
            <div>
                <div id="name_mock" className="uppercase text-[11px] font-bold ">Jonathan Michael</div>
                <div className="size-md pb-md">
                <strong>
                    <span className="pr-sm text-[16px] font-bold">
                    &#x2022;&#x2022;&#x2022;&#x2022;
                    </span>
                    <span id="carddigits_mock" className='text-[16px] font-bold'>3456</span>
                </strong>
                </div>
                <div className="flex-between flex-vertical-center">
                <strong className="size-md">
                    <span id="mm_mock">09</span>/<span id="yy_mock">22</span>
                </strong>
                <div className='flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
                    <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"/>
                </svg>
                <span className='text-[8px]'>mastercard</span>
                </div>
                
                </div>
            </div>
            </div>
            
            <ul className="purchase-props">
            <li className="flex-between">
                <span>Company</span>
                <div className='flex'><RiAppleFill className='text-[20px] text-black'/><strong className=''>Apple</strong></div>
            </li>
            <li className="flex-between">
                <span>Order number</span>
                <strong>1266201</strong>
            </li>
            <li className="flex-between">
                <span>Product</span>
                <strong>MacBook Air</strong>
            </li>
            <li className="flex-between">
                <span>VAT (20%)</span>
                <strong>$100.00</strong>
            </li>
            </ul>
        </div>
        <div className="separation-line"></div>
        <div className="total-section flex-between flex-vertical-center">
            <div className="flex-fill flex-vertical">
            <div className="total-label f-secondary-color">You have to Pay</div>
            <div>
                <strong>549</strong>
                <small>.99 <span className="f-secondary-color">USD</span></small>
            </div>
            </div>            
            <RiFilePaper2Fill />
        </div>
        </div>
    </form>
        </div>
    )
}

export default Form