let height = window.innerHeight;
let snowDiv = document.getElementById("snow-div")
let snow_2 = document.getElementById("snow-div-2")
let snow_3 = document.getElementById("snow-div-3")
createfun()
creatFunFirst()
creatFunSecond()
function creatFunFirst(){
    let array=[]
    for(let i = 0 ;i<30 ; i++){
        array.push(document.createElement("div"))

    }
    
    array.forEach((e,i)=>{
        let random = Math.floor(Math.random()*10)
       e.classList.add("snow")
       if(i%3 === 0 || i%2 ===0 ){
        e.style.animationDelay= `0.${i+random}s`
       }
       if( i%4 === 0 || i%10 ===0){
        e.style.animationDelay= `1.${random}s`
       }
       if( i%5 === 0 || i%15 ===0){
        e.style.animationDelay= `0.${random}s`
       }
       if( i%7 === 0 || i%25 ===0){
        e.style.animationDelay= `1.${i+random}s`
       }
       
       snowDiv.append(e)
    })

}
function creatFunSecond(){
    let array=[]
    for(let i = 0 ;i<30 ; i++){
        array.push(document.createElement("div"))

    }
    
    array.forEach((e,i)=>{
        let random = Math.floor(Math.random()*10)
       e.classList.add("snow-2")
       if(i%3 === 0 || i%2 ===0 ){
        e.style.animationDelay= `0.${i+random}s`
       }
       if( i%4 === 0 || i%10 ===0){
        e.style.animationDelay= `1.${random}s`
       }
       if( i%5 === 0 || i%15 ===0){
        e.style.animationDelay= `0.${random}s`
       }
       if( i%7 === 0 || i%25 ===0){
        e.style.animationDelay= `1.${i+random}s`
       }
       
       snow_2.append(e)
    })

}
function createfun (){
    let array=[]
    for(let i = 0 ;i<30 ; i++){
        array.push(document.createElement("div"))

    }
    
    array.forEach((e,i)=>{
        let random = Math.floor(Math.random()*10)
       e.classList.add("snow-3")
       if(i%3 === 0 || i%2 ===0 ){
        e.style.animationDelay= `0.${i+random}s`
       }
       if( i%4 === 0 || i%10 ===0){
        e.style.animationDelay= `1.${random}s`
       }
       if( i%5 === 0 || i%15 ===0){
        e.style.animationDelay= `0.${random}s`
       }
       if( i%7 === 0 || i%25 ===0){
        e.style.animationDelay= `1.${i+random}s`
       }
       
       snow_3.append(e)
    })

   
}


setInterval(()=>{
    let bla = document.querySelectorAll(".snow")
    bla.forEach((e)=>{
        e.remove()
    })
    
    creatFunFirst()
    let randomRang= Math.random() * (2000 - 500) + 500;
},3000)
setInterval(()=>{
    let bla = document.querySelectorAll(".snow-2")
    bla.forEach((e)=>{
        e.remove()
    })
    
    creatFunSecond()
    let randomRang= Math.random() * (2000 - 500) + 500;
},1500)
setInterval(()=>{
    let bla = document.querySelectorAll(".snow-3")
    bla.forEach((e)=>{
        e.remove()
    })
    
    createfun()
    let randomRang= Math.random() * (2000 - 500) + 500;
},2000)




