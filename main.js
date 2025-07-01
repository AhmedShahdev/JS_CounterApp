let count = 0;
const counterdisplay = document.querySelector("#counter-display");
const incBtn = document.querySelector("#increment-btn");
const decBtn = document.querySelector("#decrement-btn");
const resetBtn = document.querySelector("#reset-btn");

//The function to update the current count
const updateDisplay = ()=> {
    counterdisplay.textContent = count;
};


//adding event on increment btn
incBtn.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});

//adding event on decrement btn
decBtn.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});

//adding event on reset btn

resetBtn.addEventListener("click", ()=>{
    count = 0;
    updateDisplay();
})

//call this function to the entire app
updateDisplay();