
let uesers = [
    {
        imgUrl: "img/5.jpg" ,
        name: "Mis : Fatima MBBS",
        job: "Programar" ,
        discrption: "Mis : Fatima MBBS [  Location Peshawer ] consectetur adipisicing elit. Assumenda nulla cumquesit facere, laudantium reiciendis quo, reiciendi sreici endisreic iendis obcaecati aperiam repellat reiciendis "

    },
    {
        imgUrl: "img/2.jpg" ,
        name: "Mis : Rukhsar RAJ",
        job: "HTML & CSS" ,
        discrption: "Mis : Rukhsar RAJ [ Location Punjab] consectetur adipisicing elit. Assumenda nulla cumquesit facere, laudantium quo, obcaecati reiciendis reiciendis  reiciendis aperiam repellat reiciendis  reiciendis re"

    },
    {
        imgUrl: "img/3.jpg" ,
        name: "Mis : Shakila Khan",
        job: "Javascript" ,
        discrption: "Mis : Shakila Khan [ location Lakhor] dolor sit amet consectetur adipisicing elit. Assumenda nulla cumquesit facere, laudantium reiciendis reiciendis reiciendisquo, obcaecati aperiam repellat reiciendis "

    },
    {
        imgUrl: "img/4.jpg" ,
        name: "Mis : Gul Naaz Bagam",
        job: "Programar C++" ,
        discrption: "Mis : Gul Naaz Bagam [ Location Karach ] ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla cumquesit facere, laudantium quo, obcaecati reiciendis reiciendis aperiam repellat reiciendis "

    }
]






var incres = 0



function preveisHandral(){

if(incres > 0){
    incres--
    document.querySelector('#imgTag').src = uesers[incres].imgUrl
    document.querySelector('#userName').textContent = uesers[incres].name
    document.querySelector('#job').textContent = uesers[incres].job
    document.querySelector('#discrption').textContent = uesers[incres].discrption

}else{
    incres = uesers.length -1

    document.querySelector('#imgTag').src = uesers[incres].imgUrl
    document.querySelector('#userName').textContent = uesers[incres].name
    document.querySelector('#job').textContent = uesers[incres].job
    document.querySelector('#discrption').textContent = uesers[incres].discrption


}
    }



function nextHandral(){
 
 if(incres == uesers.length -1 ){

    incres = 0
    document.querySelector('#imgTag').src = uesers[incres].imgUrl
    document.querySelector('#userName').textContent = uesers[incres].name
    document.querySelector('#job').textContent = uesers[incres].job
    document.querySelector('#discrption').textContent = uesers[incres].discrption

 }{
    incres++
    document.querySelector('#imgTag').src = uesers[incres].imgUrl
    document.querySelector('#userName').textContent = uesers[incres].name
    document.querySelector('#job').textContent = uesers[incres].job
    document.querySelector('#discrption').textContent = uesers[incres].discrption

 }
    }