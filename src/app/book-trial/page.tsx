'use client'
import React from 'react'
import Script from 'next/script'
import { delaGothic as font } from './../../fontList'
const Page = () => {
    return (
        <main className=" w-full relative min-h-full flex-grow flex-col flex px-6 pt-16 py-3 items-center justify-start gap-6 max-w-[900px] ">

            <div id='frame' className=' w-full z-50 '>
                <iframe data-tally-src="https://tally.so/embed/3EXKQl?alignLeft=1&dynamicHeight=1" loading="lazy" width="100%" height="240" frameBorder={0} marginHeight={0} marginWidth={0} title="Book Your Free Trial"></iframe>
            </div>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    // @ts-ignore
                    Tally.loadEmbeds();

                }}
            />
            <h1 style={font.style} className='z-10 px-10 absolute self-center animate-pulse duration-200 top-24 text-xl lg:text-6xl ease-in-out' role="status" id='loader'>
                Please Wait ....
            </h1>
        </main>
    )
}

export default Page
