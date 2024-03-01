export const Button = (onClick:() => void,innerHtml:string,className:string) =>{
    const button = document.createElement("button")
    button.className = className
    button.innerHTML = innerHtml
    button.onclick = () => onClick()
    return button
}