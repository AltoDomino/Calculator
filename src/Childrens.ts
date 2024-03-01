export const Childrens = (className:string,innerHTML:string,{children} :{children:HTMLElement[]})=>{
    const Childrens = document.createElement("div")
    Childrens.className = className
    Childrens.innerHTML = innerHTML
    children.forEach((child) =>{Childrens.appendChild(child)})
    return Childrens
}