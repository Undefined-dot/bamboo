import { MutableRefObject, useEffect, useRef, useState } from "react"

type optionsProps = {
    slidesVisible: number, 
    slidesToScroll: number,
}

export const useCaroussel = ({numberChlid, option, refContainer, refRoot} : {numberChlid: number, option: optionsProps, refContainer: MutableRefObject<HTMLDivElement | null>, refRoot: MutableRefObject<HTMLDivElement | null>}) => {
    const [translate, setTranslate] = useState<number>(0)
    const [ current, setCurrent ] = useState<number>(0)
    const [width, serWidth]  = useState<number>(0)
    const [options, setOptions]= useState(option)
    const  [lastTranslate, setLasTranslate] = useState<{x: number, y: number} | undefined>(undefined)
    let [origin, setOrigin] = useState<{x: number, y: number} | undefined>(undefined)
    
    const child = useRef(numberChlid)

    function goto (index: number) {
        if (index <= 0) {
            index = child.current - options.slidesVisible
        } else if ((index > child.current - 1 || refContainer.current?.children[current + options.slidesVisible] === undefined)) {
            index = 0
        }
        let translate = index * -100 / child.current
        setTranslate(translate)
        setCurrent(index)
    }


    function next () {
        goto(current + options.slidesToScroll)
    }

    function prev () {
        goto(current - options.slidesToScroll)
    }

    function startDag (e: any) {
        if (e.touches) {
            if (e.touches.length > 1) {
              return
            } else {
              e = e.touches[0]
            }
          }

          setOrigin({x: e.screenX, y: e.screenY})
          if (refContainer.current) {
            refContainer.current.style.transition = "none"
            serWidth(refContainer.current.offsetWidth)
        }
    }

    function drag (e: any) {
        if (origin) {
            let point = e.touches ? e.touches[0] : e
            let translation = {x: point.screenX - origin.x, y: point.screenY - origin.y}
            if (e.touches && Math.abs(translation.x) > Math.abs(translation.y)) {
              e.stopPropagation()
            }
            setLasTranslate(translation)
            let baseTranslate = current * -100 / child.current
            setTranslate(baseTranslate + 100 * translation.x / width)
        }
    }

    function dragEnd () {
        if (origin && lastTranslate) {
            if (refContainer.current !== null) {
                refContainer.current.style.transition = ""
             }
            if (refRoot.current) {
                if (Math.abs(lastTranslate.x / refRoot.current.offsetWidth) > 0.2) {
                    if (lastTranslate.x < 0 ) {
                      next()
                    } else {
                      prev()
                    }
                  } else {
                    goto(current)
                  }
            }
        }
        origin = undefined
    }

    useEffect(() => {
        console.log(origin, lastTranslate, width)
        window.addEventListener("touchmove", drag)
        window.addEventListener("touchend", dragEnd)
        window.addEventListener("touchcancel", dragEnd)
    
        return () => {
            window.removeEventListener("touchmove", drag)
            window.removeEventListener("touchend", dragEnd)
            window.removeEventListener("touchcancel", dragEnd)
        }
        }, [origin, lastTranslate, width])
    

    return {
        next,
        prev,
        drag,
        dragEnd,
        startDag,
        numberChlid,
        option,
        refContainer,
        refRoot,
        translate,
        current
    }
}