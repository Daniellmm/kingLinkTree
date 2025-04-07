import React from 'react'
import BG from '../assets/images/bg.png'
import DOLLAR1 from '../assets/images/dollar1.png'
import DOLLAR2 from '../assets/images/dollar2.png'

const LandingPage = () => {
    return (
        <section className='min-h-screen relative overflow-hidden bg-black w-full px-5'>

            {/* Background Image */}
            <div className='absolute inset-0 z-0 w-full h-full'>
                <img
                    src={BG}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='absolute top-[200px] right-[0px]'>
                <img src={DOLLAR1} alt="" className='' />
            </div>
            <div className='absolute bottom-[50px] left-[0px]'>
                <img src={DOLLAR2} alt="" className='' />
            </div>

            {/* Foreground Content */}
            <div className='relative z-10 flex flex-col gap-y-6 justify-center items-center'>

                <div className='flex flex-col items-center pt-10 gap-y-1'>
                    <h1 className=' text-white md:text-xl text-center' style={{ fontFamily: 'Minion Pro, serif' }}>
                        <span className='text-[#C1A875]'>Get Up to $4M </span> in Fast, Reliable Funding for you and your customers
                    </h1>
                    <p className='text-white'>Select the funding you want</p>
                </div>

                <div className='h-44 w-44 bg-[#C1A875] rounded-full mt-5 flex justify-center items-center'>
                    <div className='h-40 w-40 bg-gray-400 rounded-full'></div>
                </div>

                <div className='flex flex-col gap-y-2 justify-center items-center pt-5'>
                    <button className='bg-[#C1A875] text-sm py-4 px-10 md:px-5 rounded-xl'>No Doc Personal Funding Up to $200,000</button>
                    <button className='bg-[#C1A875] text-sm py-4 px-10 md:px-5 rounded-xl'>Business Cash Loan Funding Up to $3M</button>
                    <button className='bg-[#C1A875] text-sm py-4 px-10 md:px-5 rounded-xl'>Financing For My Customers up to $4M</button>
                    <button className='bg-[#C1A875] text-sm py-4 px-10 md:px-5 rounded-xl'>0% Business Credit Card Funding & More</button>
                    <button className='bg-[#C1A875] text-sm py-4 px-10 md:px-5 rounded-xl'>Home Equity Line of Credit up to $3M</button>
                </div>

                <div className='pb-14 pt-2'>
                    <h1 className='text-white text-center'>
                       <span className='text-[#C1A875]'> Download FREE </span> “Ultimate Funding Qualifications Guide”
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default LandingPage
