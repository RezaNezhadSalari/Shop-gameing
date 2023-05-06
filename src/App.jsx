import logo from'../src/assets/image/logo.png'
import SearchBar from './Components/Searchbar/Searchbar'
export default function App() {
  return (
    <div className='w-[1440px] mx-auto'>
      <div className="flex justify-between  bg-green-800 h-7 ">
        <p className="text-start text-white ml-3">+989396448586</p>
        <p className="text-center text-white">Get 50% off on selected items | Shop Now</p>
        {/* location bayd button beshe */}
        <p className="text-end text-white mr-3">Location</p>
      </div>
      <div className='flex justify-between items-center gap-2 h-20 px-6'>
        <div className='h-full'>
        <img className='h-full' src={logo}/>
        </div>
        <div className='relative flex justify-center items-center text-left'>
          <button type='button' className='inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50' id='menu-button' aria-expanded='true'>
            Categories
            <svg className="-mr-1 h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className='flex gap-5 items-center justify-start mr-auto'>
          <button type='button' className='inline-flex  px-3 py-2 text-sm font-semibold text-gray-900 '>Deals</button>
          <button className='inline-flex px-3 py-2 text-sm font-semibold text-gray-900 '>Whats New</button>
          <button className='inline-flex px-3 py-2 text-sm font-semibold text-gray-900 '>Delivery</button>
         
        </div>
        <div className='flex gap-8 items-end justify-end '>
          <SearchBar />
          <button className='inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mr-1 w-5 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
               </svg>
               Account
          </button>
          <button className='inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mr-1 w-5 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              Cart
          </button>
        </div>
      </div>
    </div>
    )
}
