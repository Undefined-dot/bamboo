import { useEffect, useRef, useState } from "react";
import {motion, useInView, useAnimation} from "framer-motion"


interface Props {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    className?: string
}

export const Reveal = ({children, width = "fit-content", className}: Props) => {

    const ref = useRef(null)
    const inView = useInView(ref, {once: true})
    const mainControl = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControl.start("visible")
        }
    }, [inView])

    return <div className={className} ref={ref} style={{width}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial = "hidden"
            animate = {mainControl}
            transition={{ duration: 0.5, delay: 0.25}}
        >{children}</motion.div>
    </div>
}

export const RevealLeft = ({children, width = "fit-content"}: Props) => {

    const ref = useRef(null)
    const inView = useInView(ref, {once: true})
    const mainControl = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControl.start("visible")
        }
    }, [inView])

    return <div ref={ref} style={{width}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, x: -75},
                visible: {opacity: 1, y: 0},
            }}
            initial = "hidden"
            animate = {mainControl}
            transition={{ duration: 0.5, delay: 0.25}}
        >{children}</motion.div>
    </div>
}