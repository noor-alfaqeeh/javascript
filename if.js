/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
function greater (){
	if (x>y){
		return x;
	}
	else {
		return y;
	}
} 
console.log(greater()) ;
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  function signs(){
  	if (x => 0){
  		return "this sign is +";
  	}
  	else {
  		return "thi sign is -";
  	}
  }
  console.log(signs()) ;
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  function max (a,b,c){
  	if (a>b && a>c){
  		if (b>c){
  			return a+" , "+b+" , "+c+" ,"; 
  		}
  		else{
  			return a+" , "+c+" , "+b+" ,";
  		}
  	}
  	else if (b>a && b>c){
  		if (a>c){
  			return b+" , "+a+" , "+c+" ,";
  		}
  		else{
  			return b+" , "+c+" , "+a+" ,";
  		}
  	}
  	else if (c>a && c>b){
  		if (a>b){
  			return c+" , "+a+" , "+b+" ,";
  		}
  		else {
  			return c+" , "+b+" , "+a+" ,";
  		}
  	}
  }
  console.log(max()) ;
 
 /******* End Your Code ********* */



/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function largestNumber (num1,num2,num3,num4,num5){
	if (num1>num2 && num1>num3 && num1>num4 && num1>num5){
		return num1;
	}
	else if (num2>num3 && num2>num4 && num2>num5){
		return num2;
	}
	else if (num3>num4 && num3>num5 ){
		return num3;
	}
	else if (num4>num5){
		return num4;
	}
	else {
		return num5;
	}

}
  
  console.log(largestNumber()) ;
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, 
 otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function greater (){
	if (x>y){
		return "Hello World";
	}
	else {
		return "Goodbye";
	}
} 
console.log(greater()) ;

  
 /******* End Your Code ********* */



