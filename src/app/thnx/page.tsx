'use client'
import React, { useEffect, useState } from 'react'
import { delaGothic as font } from '../../fontList'
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { IoLogoInstagram } from 'react-icons/io5';
const Page = () => {

    const searchParams = useSearchParams();
    const [sec, setSec] = useState<number>(60);

    const router = useRouter();

    useEffect(() => {
        sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
        sec === 0 && router.replace('/')
    }, [router, sec])

    return (
        <main style={font.style} className=" w-full relative min-h-full flex-grow flex-col flex px-6 pt-16 py-3 items-center justify-center gap-6 max-w-[900px] ">
            <h1 className='text-3xl text-center'>Hey {searchParams.get('usr') != null ? searchParams.get('usr') : 'Student'}, <br /><br />
                Thanks for showing your interest We will be connect with you as soon as possible.</h1>
            <Link href='/' replace className='bg-[#3049d3] text-white h-full flex px-4 hover:scale-110 transition-all ease-in-out duration-150 py-2 text-base rounded-full'>Home</Link>
            <h1 className='text-sm text-gray-600'>Redirecting to Homepage in {sec} seconds</h1>
        </main>
    )
}

export default Page

