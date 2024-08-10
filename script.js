//let us target a button in java script
var button = document.querySelector(".btn")

//let us add an event listener to the button
button.addEventListener("click", calculateBMI)

//let us define the function we called in the event listener
function calculateBMI(){
    //let us target all the components of the app that we need
   var firstname = document.querySelector(".first")
   var lastname = document.querySelector(".last")
   var height = document.querySelector(".height")
   var weight = document.querySelector(".weight")
   var result = document.querySelector(".result")

   //let us calculate the BMI value 
   var BMI = weight.value / (height.value * height.value)

   //let us set the BMI value to 2 decimal places
   BMI = BMI.toFixed(2)

 //let us log into the console
   console.log(BMI)
   

     //let us carry out form validation
     if(firstname.value == "" || lastname.value == "" || height.value == "" || weight.value== ""){
      result.innerHTML="This form is not filled appropriately"
      result.style.color="red"
    
     } else{
      //let us display the BMI value webpage
      //result.innerHTML = BMI + "kg/m<sup>2</sup>"
      if(BMI < 18.5 ){
        //let us display the BMI value webpage
         result.innerHTML = firstname.value + " " + lastname.value + " " +  BMI + "kg/m<sup>2</sup>" + " You are underweight. Please see a dictor immidiately"
         result.style.color="red"
      } else if(BMI > 18.4 && BMI < 25){
        //let us display the BMI value webpage
         result.innerHTML = firstname.value + " " + lastname.value + " " + BMI + "kg/m<sup>2</sup>" + " You are healthy"
         result.style.color="black"
      } else if(BMI > 24.9 && BMI < 30){
        //let us display the BMI value webpage
         result.innerHTML = firstname.value + " " + lastname.value + " " + BMI + "kg/m<sup>2</sup>" + " You are overweight. Please reduce intake of fatty and oily foods"
         result.style.color="red" 
      } else {
        //let us display the BMI value webpage
        result.innerHTML = firstname.value + " " + lastname.value + " " +  BMI + "kg/m<sup>2</sup>" + " You are obese. Please see a doctor immidiately"
        result.style.color="red"
      }
     }
    }