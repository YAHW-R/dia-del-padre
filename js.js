const target = document.querySelector(`.target__main`);
const butom = document.querySelector(`.title2`);
const target2 = document.querySelector(`.target__before`);
const corazon1 = document.getElementById(`heart1`);
const corazon2 = document.getElementById(`heart2`);
const miniHeart1 = document.getElementById(`mini__heart1`);
const miniHeart2 = document.getElementById(`mini__heart2`);
const globos = document.querySelectorAll(`.globo`);



butom.addEventListener(`click`, ()=>{
    target.classList.add(`add__target`);
    target2.classList.add(`delet__card`);
    globos.forEach((globo)=>{
        globo.classList.add(`globo__animation__class`);
    })
})

corazon1.addEventListener(`click`, ()=>{
    if (miniHeart1.classList.contains(`mini__heart__after1`)) {
        miniHeart1.classList.remove(`mini__heart__after1`);
        miniHeart1.classList.add(`mini__heart__after2`);
    }
    else {
        miniHeart1.classList.remove(`mini__heart__after2`);
        miniHeart1.classList.add(`mini__heart__after1`);

    }
    
})

corazon2.addEventListener(`click`, ()=>{
    if (miniHeart2.classList.contains(`mini__heart__after1`)) {
        miniHeart2.classList.remove(`mini__heart__after1`);
        miniHeart2.classList.add(`mini__heart__after2`);
    }
    else {
        miniHeart2.classList.remove(`mini__heart__after2`);
        miniHeart2.classList.add(`mini__heart__after1`);

    }
})