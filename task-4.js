let myScore = 80;
let friendScore =70;

if(myScore > 80){
    if(friendScore > 80){
        console.log("We two friends had lunch at a restaurant.")
    }else{
        if(friendScore >=60 && friendScore <=80){
            console.log("Good Luck friend, better in next time")
        }else{
            if(friendScore >=40 && friendScore <=60){
                console.log("I will not seen your message")
            }else{
                console.log('Tonight will block you')
            }
        }
    }
}else{
    console.log("Go home, sleep, and act sad.")
}

