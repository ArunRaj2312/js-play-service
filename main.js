var age=parseInt(prompt("enter your age"));
var gen=prompt("enter your gender");
var mar=prompt("you married yes/no");
if(gen=="female"){
    console.log("only urban areas");
}
else if(gen=="male"){
    if(age>20 && age<40){
        console.log("you work in anywhere");
    }
    else if(age>=40 && age<60){
        console.log("only urban areas");
    }
    else{
        console.log("ERROR");
    }
}