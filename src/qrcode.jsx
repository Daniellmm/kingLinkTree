import React from 'react'
import { QRCodeCanvas } from 'qrcode.react';


const Qrcode = () => {
    const websiteUrl = "https://core-nysc.web.app";
    return (
        <section className='bg-slate-600 min-h-screen w-full flex justify-center items-center'>
            <div className='h-[500px] bg-white w-[700px] flex flex-col justify-center space-y-5 items-center py-9 px-10'>

                <div>
                    <QRCodeCanvas
                        value={websiteUrl}
                        size={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default Qrcode