const container=document.querySelector("#container");
let newGrid=16;
let hue=0;

for (let j=0;j<newGrid;j++){
    const contain=document.createElement("div");
    contain.classList.add("contain")
    contain.id=`contain${j}`;
    
    for (let i=0;i<newGrid;i++){
    const divCont=document.createElement("div");    
    divCont.classList.add("diver");
    contain.appendChild(divCont);
        
    }
container.appendChild(contain)
};






