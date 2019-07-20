console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];




// function avgAge(persons){
// 	var avg = persons.reduce(function (x, y){return x+y.age;},0);
// 	console.log(avg/persons.length);
// }

function avgAge(persons){
	var avg = persons.reduce((x, y)=>{return x+y.age;},0);
	console.log(avg/persons.length);
}

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 } , 
{ name: { first: 'Zues', last: 'Odin' }, age: 55 },
  
];


function longestName(persons){
	var long = persons.reduce(function (x,y)
	{
		if (x.length<(y.name.first+y.name.last).length){
			return y.name.first+" "+y.name.last;
		}
		else {return x;}
		
	},'');
	return long;
}

/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr){
	var max=arr.reduce( (acc,num)=> {
		if (acc>num){
			return acc;
		}
		else {return num;}
	},0);
	return max;
}

console.log(maxNumber([1,2,4,9]));



/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, chr){
	var count=0;
	var repeat = str.split("");
	 repeat.reduce(function(x,y){
		if (y===chr){
			return count++;
		}

	});
	return count;
}

console.log(repeatChar("hello world","w"));


/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/


function usAndNumberBeetweenUs(num1,num2){
	var arr=[(num1,num2-1)];
	arr.push(num1);
	arr.reduce(function(x,y){
        if (x<y){
        	 
        	 arr.push(x);
        	 x++;
        	 return x;
        }
       arr.push(num2); 
	},num1);
   return arr;

}







//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr){
	var nArr = arr.filter(num=>num%2==0);
	return nArr;   
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr){
	var nArr = arr.filter(num=>num%4==0);
	return nArr;   

}

/*
8
**this question not that easy mybe you will need to use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(arr,char){
	var nArr = arr.filter(function (str){
		var nStr=str.toLowerCase().includes(char.toLowerCase());
		return nStr;
		
	});
	return nArr;

}

console.log(containChar(["hello","world"],"w"));



/*
function containChar(arr,char){
	var nArr = arr.map(function (str){
		var nStr = str.split("");
		 nStr.filter(function (chr){
		 	(chr === char);
		 	return nStr.join('');

		 });
          
	
	});
	return nArr;
}

    const names = ['Victoria', 'Pearl', 'Olivia', 'Annabel', 'Sandra', 'Sarah'];
    const filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('ia')); // ["Victoria", "Olivia"]
*/



/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(strings){
	var even = strings.filter((str)=> strings.indexOf(str)%2==0);
	var evenOdd = even.filter(strOdd=>strOdd.length%2!==0);
	return evenOdd;
}



/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 } , 
{ name: { first: 'Zues', last: 'Odin' }, age: 55 },
  
];


function olderThan(persons,num){
	var arr = persons.filter(obj=>obj.age>num);
	return arr;

}

console.log(olderThan(persons,56));

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(strings,num){
	var arr = strings.filter(str=>str.length<num);
	return arr;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
shorterThan(strings,5);


// if you finish the exercises review the material of the week and help your classmate
