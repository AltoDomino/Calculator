export const generalDiv = ({ children }: { children: HTMLElement[]}) => {
    const root = document.getElementById('calculator') as HTMLDivElement
     root.className = 'calculator'
    children.forEach(child => {
        root.appendChild(child)
    })
    return root
}