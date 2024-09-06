"use client"
import { SlideTabs } from './SliderTab';
import { Socials } from './Socials';
export const Header = () => {
    return (
        <>
        <div className={`p-3 flex items-center sticky top-0 rounded-br-3xl rounded-bl-3xl m-5`}>
            <p className="text-2xl font-bold text-white w-[145px]">JTU.</p>
            <div className="flex-1 flex justify-center">
                <SlideTabs />
            </div>
            <Socials />
        </div>
        </>
    )
}