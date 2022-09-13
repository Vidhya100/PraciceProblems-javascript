const readline = require('readline-sync');
let d = readline.question("Enter date: ");
let m = readline.question("Enter month: ");
let date= parseInt(d);
let month = parseInt(m);

if(month<1 || month>12 || date<1 || date>31 )
{
	console.log("Please enter valid date and month");
}
else if(month==3 && date>=20)
{
	console.log("yes");
}
else if(month==4 && date<=30)
{
	console.log("yes");
}
else if(month==5 && date<=31)
{
	console.log("yes");
}
else if(month==6 && date<=20)
{
	console.log("yes");
}else{
	console.log("no");
}