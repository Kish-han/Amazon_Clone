import React from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon, } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {

    const {data:session} = useSession();
    

    return (
        <header className='sticky top-0 z-50' >
            {/* Top */}
            <div className="flex justify-between items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="relative w-32 h-14 mt-2 ml-2 items-center" >
                    <Image
                        src='https://bit.ly/3LiUpRD'
                        layout='fill'
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>
                <div className="hidden sm:flex items-center rounded-md flex-grow h-10 bg-yellow-400  cursor-pointer ml-4">
                    <input type="text" className='p-2 h-full w-full rounded-l-md outline-none px-4' />
                    <div className="hover:bg-yellow-500 h-10 flex items-center rounded-md">
                        <SearchIcon className="h-12 p-4" />
                    </div>
                </div>
                {/* Right */}
                <div className="text-white flex items-center space-x-6 text-xs mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {session ? `Hello, ${session.user.name}` : 'Sign In'}
                        </p>
                        <p className='font-extrabold md:text-sm'>Account & list</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className="link relative flex items-center">
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-semibold' >0</span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className="link">Prime video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header