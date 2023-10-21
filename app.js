/* 

**
CODE BY MUHAMMAD HASNAIN GHAZNA (full stack web developer)
follow 
check our offical website : ghazna.netify.app

*/






// select all buttons from keyboard div 
const buttons = document.querySelectorAll(".keyboard button")

// input  
const resultInput = document.getElementById("resultInput")


let value ="0"
resultInput.value = 0;

buttons.forEach(button => {

    button.addEventListener("click", e => {


        if (e.target.innerText == "AC") {
            value = 0
            resultInput.value = value
        }

        else if (e.target.innerText == "DEL") {
            value = value.substring(0, value.length - 1)
            if (value.length < 1) {
                value = 0;
            }

            resultInput.value = value
        }




        else if (e.target.innerText == "=") {
            if (value.length < 1) {
                value = 0
            }
            else {
                value = eval(value)    
            }

            resultInput.value = value
        }




        else {
            value += e.target.innerText
            resultInput.value = value
        }



    })

})


// creatd by Muhammad Hasnain Ghazna 
// github: mhgkhan // https://github.com/mhgkhan
