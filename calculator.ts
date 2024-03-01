
import { Childrens } from "./src/Childrens"
import { generalDiv } from "./src/generalDiv"
import { Button } from "./src/buttons"
import { Calculator } from "./src/classCalculator"
import { divElement } from "./src/divs"


const result = divElement("result","0")
const sign = divElement("sign","+")
const leftSide = Button(() => calc.setActive("left"),"0","left")
const rightSide = Button(() => calc.setActive("right"),"0","right")
const calculate = Button (() =>calc.getResult(),"CALCULATE","calculate")

leftSide.style.borderWidth= "3px"

generalDiv({children:[result,calculate,

    Childrens("operation","",{children:[leftSide,sign,rightSide]}),

    Childrens("options","",{children:[
        Button(() => calc.setSign("+"),"+","add"),
        Button(() => calc.setSign("-"),"-","minus"),
        Button(() => calc.setSign("*"),"*","multi"),
        Button(() => calc.setSign("/"),"/","division")
    ]}),

    Childrens("row","",{children:[
        Button(() => calc.setNumber("1"),"1","number_1"),
        Button(() => calc.setNumber("2"),"2","two"),
        Button(() => calc.setNumber("3"),"3","number_3")
    ]}),

    Childrens("row","",{children:[
        Button(() => calc.setNumber("4"),"4","four"),
        Button(() => calc.setNumber("5"),"5","five"),
        Button(() => calc.setNumber("6"),"6","six")
    ]}),

    Childrens("row","",{children:[
        Button(() => calc.setNumber("7"),"7","seven"),
        Button(() => calc.setNumber("8"),"8","eight"),
        Button(() => calc.setNumber("9"),"9","nine")
    ]}),
    Childrens("row","",{children:[
        Button(() => calc.deleteNumber(),"0","Number_10"),
        Button(() => calc.fraction(),".","fraction"),
        Button(() => calc.setNumber("0"),"0","Number_12")

    ]})
]})


const calc = new Calculator(sign, result, leftSide, rightSide)


