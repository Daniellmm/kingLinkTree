import React from 'react'

const LandingPage = () => {
  return (
    <section className='min-h-screen overflow-hidden bg-black w-full px-5'>
        <div className=' flex flex-col gap-y-6 justify-center items-center'>
            <div className='h-40 w-40 bg-gray-400 rounded-full mt-5 '></div>

            <div className='flex flex-col items-center gap-y-1'>
                <h1 className='text-[#E7A647] md:text-xl text-center'>Get Up to $4M in Fast, Reliable funding for you and your customers.</h1>
                <p className='text-white'>Select the funding you want</p>
            </div>

            <div className='flex flex-col gap-y-2 justify-center items-center pt-5'>
                <div>
                    <button className='bg-[#E7A647] text-sm py-4 px-8 md:px-14 rounded-xl'>No Doc Personal Funding Up to $200,000</button>
                </div>
                <div>
                    <button className='bg-[#E7A647] text-sm py-4 px-9 md:px-16 rounded-xl'>Business Cash Loan Funding Up to $3M</button>
                </div>
                <div>
                    <button className='bg-[#E7A647] text-sm py-4 px-5 md:px-7 rounded-xl'>Business Credit Card Funding (0% Funding & More)</button>
                </div>
                <div>
                    <button className='bg-[#E7A647] text-sm py-4 px-5 md:px-7 rounded-xl'>High Ticket Financing For My Customers Up to $4M</button>
                </div>
                <div>
                    <button className='bg-[#E7A647] text-sm py-4 px-10 md:px-[70px] rounded-xl'>Home Equity Line of Credit up to $3M</button>
                </div>
            </div>

            <div className='pb-14 pt-2'>
                <h1 className='text-white text-center'>Download FREE “Ultimate Funding Qualifications 
                Guide”</h1>
            </div>
        </div>
    </section>
  )
}

export default LandingPage