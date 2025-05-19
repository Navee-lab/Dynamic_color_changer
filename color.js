        const btn1E1=document.querySelector(".btn1");
        const btn2E1=document.querySelector(".btn2");
        const titleE1=document.querySelector(".title");
        const resetBtn = document.querySelector(".reset");
        const bodyele=document.querySelector("body");
        //Adding Event Listeners
        btn1E1.addEventListener('click',function(){
            bodyele.style.backgroundColor="yellow";
        });
        btn2E1.addEventListener('click',()=>{
            titleE1.style.fontSize="90px";
        });
        resetBtn.addEventListener('click',function(){
            bodyele.style.backgroundColor="";
            titleE1.style.fontSize="30px";
        });
