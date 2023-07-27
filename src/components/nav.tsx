import avatar from "/avatar.jpg"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from "../util/useMediaQuery"

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15
        },
    },
    hidden: {
        opacity: 0,
    }
}

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
}

export default function Nav() {
    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 1280px)')
    return (
        <nav className="relative mx-8 flex justify-between items-center py-12 pb-12 font-medium md:mx-16 lg:mx-32">
            <img src={avatar} alt="photo of logan" className="rounded-lg h-12 w-12 scale-x-100 hover:rotate-2 "/>
            <h1 className="text-lg font-bold z-40">
                <a href="/">logan whitten</a>
            </h1>
            {matches && (
                <div className="flex gap-12">
                    <a href="/">home</a>
                    <a href="/services">services</a>
                    <a href="/contact">contact</a>
                </div>
            )}
            {!matches && (
                <div onClick={() => setToggled(prevToggle => !prevToggle)} className="space-y-1.5 cursor-pointer z-50">
                    <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className="block h-0.5 w-8 bg-black"></motion.span>
                    <motion.span animate={{ rotateZ: toggled ? 45 : 1, x: toggled ? 4 : 0, opacity: toggled ? 0 : 1 }} className="block h-0.5 w-6 bg-black"></motion.span>
                    <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 16 }} className="block h-0.5 w-4 bg-black"></motion.span>
                </div>
            )}
            {toggled && !matches && (
                <motion.div
                    variants={navMotion}
                    animate='visible'
                    initial='hidden'
                    className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40">
                    <div className="flex flex-col gap-24 text-lg">
                        <motion.a variants={itemMotion} href="/">home</motion.a>
                        <motion.a variants={itemMotion} href="/services">services</motion.a>
                        <motion.a variants={itemMotion} href="/contact">contact</motion.a></div>
                </motion.div>
            )}
        </nav>
    )
}