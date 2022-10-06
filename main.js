var image = document.querySelector(".flag");
var input = document.querySelector("#guess");
var answerButtons = document.querySelector("#buttons");
var currentCountry;
var possibleCountries = {
    spain:{
        name:"Spain",
        image:"resources\\flags-img\\es.png"
    },
    unitedStates:{
        name:"United States",
        image:"resources\\flags-img\\us.png"
    },
    france:{
        name:"France",
        image:"resources\\flags-img\\fr.png"
    },
    canada:{
        name:"Canada",
        image:"resources\\flags-img\\ca.png"
    },
    mexico:{
        name:"Mexico",
        image:"resources\\flags-img\\mx.png"
    },
    brazil:{
        name:"Brazil",
        image:"resources\\flags-img\\br.png"
    },
    peru:{
        name:"Peru",
        image:"resources\\flags-img\\pe.png"
    },
    germany:{
        name:"Germany",
        image:"resources\\flags-img\\de.png"
    },
    greatBritain:{
        name:"Great Britain",
        image:"resources\\flags-img\\gb.png"
    }
}
var keys = Object.keys(possibleCountries);






function main(){
    answerButtons.addEventListener("click", addButtonListener);
    currentCountry = getRandomCountry();
    setFlag(currentCountry.image);
    alert(currentCountry.name)

    setButtonText();



}

function onSubmit(buttonID){
    alert("You pushed button " + buttonID);
    //if(input.innerHTML === )
}

function nextQuestion(){

}

function getRandomCountry(){
    return possibleCountries[keys[Math.floor(Math.random() * keys.length)]];
}

function addButtonListener(e){       //adds an event listener to the buttons
    let isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    onSubmit(e.target.getAttribute("id"));
}

function setButtonText(){   //must be called after currentCountry is set
    let answerArr = new Array(5);
    for(let i = 0; i<answerArr.length; i++){
        let c = getRandomCountry();
        if(answerArr.includes(c.name)){
            i--;
            continue;
        }
        answerArr[i] = c.name;
    }
    if(!answerArr.includes(currentCountry.name)){        //checks to see if anwser is in array
        answerArr[Math.floor(Math.random()*answerArr.length)] = currentCountry.name;
    }
    console.log(answerArr)
    for(let j = 0; j < 5; j++){
        answerButtons.querySelector("#button" + (j + 1)).innerHTML = answerArr[j];
    }
}

function countryMatch(country1, country2){
    if(country1.name == country2.name){
        return true;
    }else {
        return false;
    }
}


function setFlag(src){
    image.src = src;
}

//setFlag();
main();