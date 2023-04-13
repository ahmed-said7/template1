document.querySelector(".heading .fa-bars").onclick=function(){
    document.querySelector(".heading .links").classList.add("active");
}
document.querySelector(".fa-close").addEventListener("click",function(){
    document.querySelector(".heading .links").classList.remove("active");
})
// document.querySelector().getAttribute
// document.querySelector(".fa-close").onclick=function(){
    // document.querySelector(".heading .links").classList.remove("active");
// }
let link=document.querySelectorAll(".heading .links li");
for(let i=0;i<link.length;i++){
    link[i].addEventListener("click",function(){
        console.log(link[i])
        for(let j=0;j<link.length;j++){
            link[j].classList.remove("act");
        }
        link[i].classList.add("act");
    })
}
let mytable=document.querySelector(".table table tbody");
// console.log(mytable);
// console.log(mytable);
let arr=["$118.345","$117.543","$116.56","$115.34","$114.65","$113.11","$112.66","$111.88","$110.99"]
document.addEventListener("click",function(e){
    if(e.target.className === "fas fa-cart-shopping"){
        // let maindiv=document.querySelector("div");
        // /maindiv.className="layer";
        let price=arr[Math.floor(Math.random()*arr.length)];
        let trow=document.createElement("tr");
        let tdata1=document.createElement("td");
        let tdata2=document.createElement("td");
        let tdata3=document.createElement("td");
        let tdata4=document.createElement("td");
        let tdata5=document.createElement("td");
        let tdata6=document.createElement("td");
        let text2=document.createTextNode("cartoon Astronaut T-Shirt");
        let icon=document.createElement("i");
        let img=document.createElement("img");
        let input=document.createElement("input");
        let source=e.target.getAttribute("data-src");
        img.src=source;
        img.width=80;
        icon.className="fas fa-remove";
        input.type="number";
        input.value="1";
        tdata1.appendChild(icon);
        tdata2.appendChild(img);
        tdata3.appendChild(text2);
        tdata4.innerHTML=price;
        tdata5.appendChild(input);
        tdata6.innerHTML=price;
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
        trow.appendChild(tdata3);
        trow.appendChild(tdata4);
        trow.appendChild(tdata5);
        trow.appendChild(tdata6);
        mytable.appendChild(trow);
        closes=document.querySelectorAll("table tr td:first-child i");
    }
})
