let anch=document.getElementsByTagName("a")[0]
anch.addEventListener("click",(event)=>{
event.preventDefault();
console.log("defaultactipon ")
})

let form=document.getElementsByTagName("form")[0]
form.addEventListener("submit",(f)=>{
    f.preventDefault();
    console.log("default form actation prevented");
})


let st="veereSH";
console.log(st.toLowerCase())
let a=10,b=20;
if (a===b) {
    console.log("if constion executed")
} else {
    console.log("else ");
}