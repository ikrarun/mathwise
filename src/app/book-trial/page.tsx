'use client'
import React, { useState } from 'react'
import serveraction from './serveraction'

import { Dropdown } from 'primereact/dropdown';

const Page = () => {
    const [course, setCourse] = useState(null);

    return (
        <main className=" w-full min-h-full flex-grow flex-col flex px-6 py-3 items-center justify-center gap-6 max-w-[900px] ">
            <form action={serveraction} className='flex flex-col w-full max-w-[600px] justify-start items-start'>
                <div className='flex flex-col w-full gap-1'>
                    <label className='pl-1 text-[#3049d3]' htmlFor="name">Name</label>
                    <input type="text" className='outline-none text-[#3049d3] ring-0 border-2 rounded-md border-[#3049d3] p-2 text-xl' name="name" id="name" />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <label className='pl-1 text-[#3049d3]' htmlFor="phone">Phone</label>
                    <input type="tel" maxLength={10} minLength={10} className='text-[#3049d3] outline-none ring-0 border-2 rounded-md border-[#3049d3] p-2 text-xl' name="phone" id="phone" />
                </div>
                <div className='flex flex-col card w-full gap-1'>

                    <h1 className='pl-1 mt-2 text-[#3049d3]' >Course</h1>
                    <Dropdown name='course' id='course' value={course} onChange={(e) => setCourse(e.value)} options={[{ name: 'Class XI', code: 'XI' }, { name: 'Class XII', code: 'XII' }, { name: 'UPSC CSAT', code: 'csat' }]} optionLabel="name"
                        placeholder="Select a City" className="w-full md:w-14rem" />
                </div>

                <button className='bg-[#3049d3] mt-3 text-base text-white px-3 py-2 rounded-xl' type='submit'>Submit</button>
            </form>

        </main>
    )
}

export default Page
