
export class Calculator {
    result: HTMLDivElement
    sign: HTMLDivElement
    left: HTMLButtonElement
    right: HTMLButtonElement
    activeSide: HTMLButtonElement

    constructor(sign:HTMLDivElement,result: HTMLDivElement, left: HTMLButtonElement, right: HTMLButtonElement){
        this.result = result
        this.left = left
        this.right = right
        this.activeSide = left
        this.sign =sign
    }
        
    setSign = (newSign: string) => {
        this.sign.innerHTML = newSign
    }

    getResult = () => {
        switch (this.sign.innerHTML){
            case "+":
                this.result.innerHTML = (+this.left.innerHTML + +this.right.innerHTML).toString()
                break
            case "-":
                this.result.innerHTML = (+this.left.innerHTML - +this.right.innerHTML).toString()
                break
            case "/":
                this.result.innerHTML = (+this.left.innerHTML / +this.right.innerHTML).toString()
                break
            case "*":
                this.result.innerHTML = (+this.left.innerHTML * +this.right.innerHTML).toString()
                break
            default:
                console.log("Wrong sign")
        }
    }

    setActive = (side: 'left' | 'right') => {
        this.activeSide = side === 'left' ? this.left : this.right
        this.left.style.borderWidth = this.left === this.activeSide ? '3px' : '1px'
        this.right.style.borderWidth = this.right === this.activeSide ? '3px' : '1px'
    }

    setNumber = (number: string) => {
        this.activeSide.innerHTML = this.activeSide.innerHTML === '0' ? number : this.activeSide.innerHTML + number
    }

    deleteNumber = () => {
        this.activeSide.innerHTML = this.activeSide.innerHTML.length === 1 ? '0' : this.activeSide.innerHTML.slice(0,-1)
    }

    fraction = () => {
        this.activeSide.innerHTML = this.activeSide.innerHTML.includes('.') ? this.activeSide.innerHTML : this.activeSide.innerHTML + '.'
    }

}

