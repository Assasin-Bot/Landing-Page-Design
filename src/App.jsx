import { useState } from 'react'
import './App.css'
import Header from './components/header'
import MainImage from './assets/image.png'
import serviceImg from './assets/image2.png'
import Footer from './components/footer'
import CardImg from './components/cardImg'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'

function App() {

  return (
    <>
      <Header />
      <main className="flex-grow bg-[URL('./assets/bg.png')]">
        <section className="rounded-lg mx-12 flex flex-col justify-center mb-24">
          <div className="text-5xl font-bold mb-4 text-center">Drywall Repairs</div>
          <div className="mb-4 md:w-2/3 text-center m-auto text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ex id sapien hendrerit, vel euismod dolor dapibus. Sed porta arcu eget molestie commodo. Praesent molestie nunc felis, a molestie quam rutrum vitae. Quisque dictum odio ut odio scelerisque, quis ornare turpis lacinia.
          </div>
          <button type="button" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/3 sm:w-1/6 m-auto px-12 py-4 text-white font-bold rounded-lg mb-8">
            Contact Us
          </button>
          <div className='bg-white rounded-xl p-12 shadow-2xl'>
            <img src={MainImage} alt="" />
          </div>
        </section>

        <section className="bg-slate-100 mb-24 py-14" id="services">
          <p className="text-4xl font-bold text-center mb-10">Our Drywall Repairs</p>
          <div className='sm:flex flex-row justify-between mx-12'>
            <div className="sm:w-5/12">
              <img src={serviceImg} alt="Main" className="rounded-lg" />
            </div>
            <div className='sm:w-1/2 text-center'>
              <div className='text-2xl sm:text-xl lg:text-3xl h-1/2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ex id sapien hendrerit, vel euismod dolor dapibus. Sed porta arcu eget molestie commodo. Praesent molestie nunc felis, a molestie quam rutrum vitae. Quisque dictum odio ut odio scelerisque, quis ornare turpis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className='hidden sm:block text-xl lg:text-3xl h-1/2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ex id sapien hendrerit, vel euismod dolor dapibus. Sed porta arcu eget molestie commodo. Praesent molestie nunc felis, a molestie quam rutrum vitae. Quisque dictum odio ut odio scelerisque, quis ornare turpis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <button type="button" className="sm:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/3 sm:w-1/6 m-auto px-12 py-4 text-white font-bold rounded-lg mb-8">
                Read More
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white mx-12 mb-24 text-center" id="about">
          <div className="text-4xl font-bold mb-12 text-center">More Drywall Repairs</div>
          <div className='hidden sm:flex flex-wrap mb-16'>
            {[...Array(12)].map((_, i) => (
              <CardImg id={i} />
            ))}
          </div>
          <div className='overflow-hidden flex flex-wrap sm:hidden'>
            <div class="grid gap-4">
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <img class="h-auto max-w-full rounded-lg" src={card1} alt="" />
                </div>
                <div>
                  <img class="h-auto max-w-full rounded-lg" src={card2} alt="" />
                </div>
                <div>
                  <img class="h-auto max-w-full rounded-lg" src={card3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center m-1'>{'<'}</div>
            <div className='bg-blue-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>1</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>2</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>3</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>4</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>5</div>
            <div className=' m-1'>...</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white m-1'>10</div>
            <div className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center m-1'>{'>'}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
