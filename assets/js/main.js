
function imo(num) {
    x = num % 3;
    y = num % 5;
    if (x!=0 && y!=0) {
        num = num
    } else if(x==0 && y!=0) {
        num = "Happy"
    } else if(x!=0 && y==0){
        num = "Sad"
    } else{
        num = "Both"
    }
    return num;
}
for (let i = 1; i < 101; i++){
    console.log(imo(i));   
}

function imo(num) {
    x = num % 3;
    y = num % 5;
    x!=0 && y!=0 ? num = num:
    x==0 && y==0 ? num ="Both": 
    x==0 && y!=0 ? num = "Happy": 
    num = "Sad" 
    return num;
}
for (let i = 1; i < 101; i++){
    console.log(imo(i));   
}

