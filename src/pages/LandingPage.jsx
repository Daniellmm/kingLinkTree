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
                    <h1 className=' text-white text-4xl text-center' style={{ fontFamily: 'Minion Pro, serif' }}>
                        <span className='text-[#C1A875]'>Get Up to $4M </span> in Fast, Reliable Funding for you and your customers
                    </h1>
                    <p className='text-white pt-2'>Select the funding you want</p>
                </div>

                <div className='h-44 w-44 bg-[#C1A875] rounded-full mt-5 flex justify-center items-center'>
                    <div className='h-40 w-40 bg-gray-400 rounded-full'></div>
                </div>

                <div className='flex flex-col gap-y-2 justify-center items-center pt-5' style={{ fontFamily: 'Montserrat, serif' }}>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px]   rounded-xl'><span className='font-bold'>No Doc Personal Funding </span>Up to <span className='font-bold'>$200,000</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl'><span className='font-bold'>Business Cash Loan Funding </span>Up to <span className='font-bold'> $3M </span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl'><span className='font-bold'>Financing For My Customers</span> up to <span className='font-bold'>$4M</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl'><span className='font-bold'>0% Business Credit Card Funding</span> & <span className='font-bold'>More</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl'><span className='font-bold'>Home Equity Line of Credit</span> up to <span className='font-bold'>$3M</span></button>
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
