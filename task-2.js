

var BMI = 22;

if(BMI < 18.5){
    console.log("you are underweight." + BMI + "Kg")
}else{
    if(BMI >= 18.5 && BMI <=24.9){
        console.log("you are normal. " + BMI + "Kg")
    }else{
        if(BMI >= 25 && BMI <= 29.9){
            console.log(" you are overweight." + BMI + "Kg")
        }else{
            console.log("Otherwise, you are obese.")
        }
    }
}