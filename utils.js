function processGrade(grade){
  if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    
    
    
    else  {
      console.log("Your new grade is :" + (grade -2));   
    }
  }else{

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }

  }
  
  if(grade == "INC"){  
    console.log("Your new grade is incomplete");
    }
     
  if(grade == "DROP"){  
    console.log("You have drop the subject" );
    }
    
    if(grade < 70){ 
    console.log( "There is no grade like that" );
    }
    
    if(grade > 100){  
    console.log("Grade is overkill" );
    }
    
   
}

module.exports = {
    processTheGrade:processGrade
}