class carouselTouch {
    origin: {x: number, y: number} | undefined
    caroussel: Carousssel
    width: number
    lastTranslate: {x: number, y: number} | undefined
    constructor (caroussel: Carousssel) {
      caroussel.container.addEventListener("dragstart", (e: any) => e.preventDefault())
      caroussel.container?.addEventListener("mousedown", this.startDrag.bind(this))
      caroussel.container?.addEventListener("touchstart", this.startDrag.bind(this))
      window.addEventListener("mousemove", this.drag.bind(this))
      window.addEventListener("touchmove", this.drag.bind(this))
      window.addEventListener("touchend", this.dragEnd.bind(this))
      window.addEventListener("mouseup", this.dragEnd.bind(this))
      window.addEventListener("touchcancel", this.dragEnd.bind(this))
      this.origin = undefined
      this.caroussel = caroussel
      this.width = 0
      this.lastTranslate = undefined
    }
  
    startDrag (e : any) {
        if (e.touches) {
          if (e.touches.length > 1) {
            return
          } else {
            e = e.touches[0]
          }
        }
  
        this.origin = {x: e.screenX, y: e.screenY}
        this.caroussel.disableTranstion()
        this.width = this.caroussel.containerWith
    }
    drag (e: any) {
        if (this.origin) {
            let point = e.touches ? e.touches[0] : e
            let translation = {x: point.screenX - this.origin.x, y: point.screenY - this.origin.y}
            if (e.touches && Math.abs(translation.x) > Math.abs(translation.y)) {
              e.preventDefault()
              e.stopPropagation()
            }
            this.lastTranslate = translation
            let baseTranslate = this.caroussel.currentSlide * -100 / this.caroussel.items.length
            this.caroussel.translate(baseTranslate + 100 * translation.x / this.width)
        }
    }
    dragEnd () {
        if (this.origin && this.lastTranslate) {
          this.caroussel.enableTranstion()
          if (Math.abs(this.lastTranslate.x / this.caroussel.carousselWidth) > 0.2) {
            if (this.lastTranslate.x < 0 ) {
              this.caroussel.next()
            } else {
              this.caroussel.prev()
            }
          } else {
            this.caroussel.goto(this.caroussel.currentSlide)
          }
        }
        this.origin = undefined
    }
  }
  
  
  export class Carousssel {
    element;
    point;
    nextButton;
    prevButton;
    options;
    container;
    items;
    root;
    currentSlide;
    children : any;
    constructor (element: HTMLElement | null, point: Element | null, options : {slideToScroll: number, slidesVisible: number}, nextButton:HTMLElement | null, prevButton:HTMLElement | null) {
            this.element  = element
            this.point = point
            this.nextButton = nextButton
            this.prevButton = prevButton
            this.options = Object.assign({
                slideToScroll: 1,
                slidesVisible: 2
            }, options)
            this.currentSlide = 0
            if (element) {this.children = Array.from(element.children)}
            this.root = this.createDivWithClass('carousselContainer')
            this.container = this.createDivWithClass('wrapperCaroussel')
            this.root.append(this.container)
            this.element?.appendChild(this.root)
            this.items = this.children?.map((child: any) => {
                let item = this.createDivWithClass('carousselItem')
                item.appendChild(child)
                this.container.appendChild(item)
                return item
            })
            this.setStyle()
            this.createNavigation()
            new carouselTouch(this)
    }
  
  
    createDot () {
      let index = 0
      if (this.element && this.point) {
        let numberOfDot =  Array.from(this.children).length
        while (index <= numberOfDot - 1) {
            const dot = this.createDivWithClass("dot")
            this.point.appendChild(dot)
            index++
        }
        Array.from(this.point.children)[0].classList.add("dotActive")
      }
    }
  
    createNavigation () {
        if (this.nextButton) {
          this.nextButton?.addEventListener('click',  this.next.bind(this))
        }
        if (this.nextButton) {
            this.prevButton?.addEventListener('click', () => {
              this.prev()
            })
        }
    }
  
    next () {
        this.goto(this.currentSlide + this.options.slideToScroll)
    }
  
    prev () {
        this.goto(this.currentSlide - this.options.slideToScroll)
    }
  
    goto (index: number) {
        if (this.items) {
            if (index < 0) {
                index = this.items.length - this.options.slidesVisible
            } else if ((index > this.items.length - 1 || index === 0) && this.point ) {
                index = 0
                document.querySelector('.dotActive')?.classList.remove("dotActive")
                Array.from(this.point.children)[0].classList.add("dotActive")
            }
            if (this.point) {
              if (index !== 0 ) {
                document.querySelector('.dotActive')?.classList.remove("dotActive")
                Array.from(this.point.children)[index].classList.add("dotActive")
              }
            }
            let translate = index * -100 / this.items?.length 
            this.container.style.transform = "translate3d("+translate+"%, 0, 0)"
            this.currentSlide = index
        } 
    }
  
    setStyle (): void {
        if (this.items){ 
            let ratio = this.items.length / this.options.slidesVisible
            this.container.style.width = (ratio * 100) + '%'
            this.items.forEach((items: any) =>  items.style.width = (100/ this.options.slidesVisible) / ratio + "%")
        }
    }
    createDivWithClass (className: string): HTMLDivElement {
        let div = document.createElement("div")
        div.setAttribute('class', className)
        return div
    }
    disableTranstion () {
      this.container.style.transition = "none"
    }
    enableTranstion () {
      this.container.style.transition = ""
    }
    get containerWith () {
      return this.container.offsetWidth
    }
    get carousselWidth () {
      return this.root.offsetWidth
    }
    translate (percent: number) {
      this.container.style.transform =  "translate3d("+ percent +"%, 0, 0)"
    }
  }
  
  const caroussel1 = new Carousssel (document.querySelector('#caroussel'),document.querySelector("#point"), {
    slideToScroll: 1,
    slidesVisible: 2
  }, document.querySelector('#buttonNext'), document.querySelector("#buttonPrev"))
  
  caroussel1.createDot()