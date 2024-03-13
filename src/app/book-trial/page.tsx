'use client'
import React from 'react'
import Script from 'next/script'

const Page = () => {

    return (
        <main className=" w-full min-h-full flex-grow flex-col flex px-6 pt-16 py-3 items-center justify-start gap-6 max-w-[900px] ">
            <iframe data-tally-src="https://tally.so/embed/3EXKQl?alignLeft=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="216" frameBorder={0} marginHeight={0} marginWidth={0} title="Book Your Free Trial"></iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    // @ts-ignore
                    Tally.loadEmbeds();
                }}
            />
        </main>
    )
}

export default Page
