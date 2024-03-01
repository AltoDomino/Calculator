export const divElement  = (className:string, innerHtml:string) => {
    const div= document.createElement("div")
    div.className = className
    div.innerHTML = innerHtml
    return div
}