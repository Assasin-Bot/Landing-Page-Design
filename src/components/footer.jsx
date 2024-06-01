import React from 'react'

export default function footer() {
    return (
        <footer className="bg-gray-800 text-white w-full p-12" id="contact">
            <div className="sm:flex flex-row text-lg">
                <div className='sm:w-1/3'>
                    <h3 className="font-bold mb-2 text-3xl">Contact Us</h3>
                    <p className='sm:w-3/4'>For any inquiries, questions or commendations, please call: 0118 33 88 999 or fill out the following form.</p>
                    <form className="flex flex-col space-y-2 sm:w-2/3">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" className="p-2 rounded" />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" className="p-2 rounded" />
                        <label htmlFor="">Subject</label>
                        <input type="subject" placeholder="Subject" className="p-2 rounded" />
                        <label htmlFor="">Message</label>
                        <textarea placeholder="Message" className="p-2 rounded"></textarea>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
                    </form>
                </div>
                <div className='sm:w-1/3'>
                    <div className='h-full sm:w-1/2 sm:justify-center m-auto flex flex-row sm:flex-col justify-around'>
                        <div className='sm:h-1/2 space-y-4'>
                            <h3 className="font-bold mb-2 text-3xl">Head Office</h3>
                            <p>Lehngasse 41</p>
                            <p>3812 Wilderswil</p>
                            <p>Switzerland</p>
                            <p>sterchi@sterchi-fb.ch</p>
                        </div>
                        <div className='sm:h-1/2 space-y-4'>
                            <h3 className="font-bold mb-2 text-3xl">Branch</h3>
                            <p>Ziege lfeldstrasse 60</p>
                            <p>4600 Olten</p>
                            <p>Switzerland</p>
                            <p>sterchi@sterchi-fb.ch</p>
                        </div>
                    </div>
                </div>
                <div className='sm:w-1/3'>
                    <div className='sm:float-right text-center'>
                        <div className="font-bold mb-2 text-3xl sm:text-right">Call Us</div>
                        <div>M +41 79 736 77 46</div>
                        <div>T +41 62 205 75 86</div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
