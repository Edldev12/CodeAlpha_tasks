const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

let history = [];


// Add numbers and operators
function append(value){

    display.value += value;

}


// Clear display
function clearDisplay(){

    display.value = "";

}


// Delete last character
function deleteLast(){

    display.value = display.value.slice(0,-1);

}


// Calculate result
function calculate(){

    try{

        let expression = display.value;

        let result = eval(expression);


        display.value = result;


        let calculation = `${expression} = ${result}`;


        history.unshift(calculation);


        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );


        renderHistory();


    }

    catch{

        display.value = "Error";

    }

}



// Show history list
function renderHistory(){

    historyList.innerHTML = "";


    history.forEach(item => {


        let li = document.createElement("li");


        li.textContent = item;



        // Click history item
        li.onclick = function(){


            let value = item.split(" = ")[1];


            if(display.value === "" || display.value === "Error"){

                display.value = value;

            }

            else{

                display.value += value;

            }

        };


        historyList.appendChild(li);


    });


}



// Clear history
function clearHistory(){

    history = [];


    localStorage.removeItem("history");


    historyList.innerHTML = "";

}



// Load history after refresh
window.onload = function(){


    let savedHistory = localStorage.getItem("history");


    if(savedHistory){


        history = JSON.parse(savedHistory);


        renderHistory();

    }



    // Load theme
    let savedTheme = localStorage.getItem("theme");


    if(savedTheme === "light"){

        document.body.classList.add("light");

    }


};




// Keyboard support
document.addEventListener("keydown",(event)=>{


    let key = event.key;



    if("0123456789+-*/.".includes(key)){


        append(key);

    }



    else if(key === "Enter"){


        calculate();

    }



    else if(key === "Backspace"){


        deleteLast();

    }



    else if(key === "Escape"){


        clearDisplay();

    }



});




// Dark / Light theme
function toggleTheme(){


    document.body.classList.toggle("light");



    let theme = document.body.classList.contains("light")
        ? "light"
        : "dark";



    localStorage.setItem(
        "theme",
        theme
    );


}




// Percentage button
function percentage(){


    if(display.value !== ""){


        display.value = Number(display.value) / 100;


    }

}



// Open / Close history panel
function showHistory(){


    let box = document.getElementById("historyBox");



    if(box.style.display === "block"){


        box.style.display = "none";


    }

    else{


        box.style.display = "block";


    }


}
function closeHistory(){

    let box = document.getElementById("historyBox");

    box.style.display = "none";

}