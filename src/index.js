import {sum} from "./hello"
import "./index.scss"

console.log("hello world")

window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById("root")
    el.innerHTML = `add a + b = ${sum(1,2)}`
})