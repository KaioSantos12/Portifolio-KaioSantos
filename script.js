tsParticles.load("particles-js", {
  background: {
    color: "#131313"
  },
  particles: {
    number: {
      value: 25
    },
    color: {
      value: "#00bfff"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 2
    },
    move: {
      enable: true,
      speed: 1
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.2,
      width: 1
    }
  }
});

const texto = "Desenvolvedor ";
let i = 0;

function escrever(){
    if(i < texto.length){
        document.getElementById("typing").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
    }
}

escrever();

const container = document.querySelector(".container-card")

let position = 0

document.querySelector(".next").onclick = () => {
    position -= 310
    container.style.transform = `translateX(${position}px)`
}

document.querySelector(".prev").onclick = () => {
    position += 310
    container.style.transform = `translateX(${position}px)`
}