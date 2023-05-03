const container=document.querySelector("#container");
let newGrid=16;
let hue=0;

const boton=document.querySelector("#boton");
boton.style.backgroundColor="hsl(300,100%,50%";
boton.addEventListener("click",nuevoGrid);

for (let j=0;j<newGrid;j++){
    const contain=document.createElement("div");
    contain.classList.add("contain")
    contain.id=`contain${j}`;
    
    for (let i=0;i<newGrid;i++){
    const divCont=document.createElement("div");    
    divCont.classList.add("diver");
    contain.appendChild(divCont);

    divCont.addEventListener("mouseenter",()=>{
        divCont.style.backgroundColor=`hsl(${hue},100%,50%)`;
        hue=(hue+1)%360;
    });
    
    divCont.addEventListener("mouseleave",()=>{
        setTimeout(()=>{
            divCont.style.backgroundColor="";
        },5000);
    });
    }
container.appendChild(contain)
};

function nuevoGrid(){

    firstChild=container.firstChild;
    while (firstChild){
        container.removeChild(firstChild)
        firstChild=container.firstChild
    }
    
    newGrid=parseInt(prompt("What grid do you want? Less than 100 please."));
    if (newGrid<100){
        for (let j=0;j<newGrid;j++){
    const contain=document.createElement("div");
    contain.classList.add("contain")
    contain.id=`contain${j}`;
    
    for (let i=0;i<newGrid;i++){
    const divCont=document.createElement("div");    
    divCont.classList.add("diver");
    contain.appendChild(divCont);
        
    divCont.addEventListener("mouseenter",()=>{
        divCont.style.backgroundColor=`hsl(${hue},100%,50%)`;
        hue=(hue+1)%360;
    });

    divCont.addEventListener("mouseleave",()=>{
        setTimeout(()=>{
            divCont.style.backgroundColor="";
        },5000);
    });
    
    }
    container.appendChild(contain)
    };
    } else{
        alert("Grid is too big, computer may freeze.")
    };
};




