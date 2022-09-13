let m = Math.floor(Math.random()*900+ 100);
let n = Math.floor(Math.random()*900+ 100);
let o = Math.floor(Math.random()*900+ 100);
let p = Math.floor(Math.random()*900+ 100);
let q = Math.floor(Math.random()*900+ 100);

console.log("numbers are:"+m+"\n"+n+"\n"+o+"\n"+p+"\n"+q);

if (( (m>n) && (m>o) && (m>p) && (m>q) ))
        console.log( "maximum number is {0}",m);
else if (( (n>m) && (n>o) && (n>p) && (n>q) ))
        console.log( "maximum number is {0}",n);
else if (( (o>m) && (o>n) && (o>p) && (o>q) ))
        console.log( "maximum number is {0}",o);
else if (( (p>m) && (p>o) && (p>n) && (p>q) ))
        console.log( "maximum number is {0}",p);
else
        console.log( "maximum number is {0}",q);


//minimun value
if (( (m<n) && (m<o) && (m<p) && (m<q) ))
        console.log( "min number is {0}",m);
else if (( (n<m) && (n<o) && (n<p) && (n<q) ))
        console.log( "min number is {0}",n);
else if (( (o<m) && (o<n) && (o<p) && (o<q) ))
        console.log( "min number is {0}",o);
else if (( (p<m) && (p<o) && (p<n) && (p<q) ))
        console.log( "min number is {0}",p);
else
        console.log( "min number is {0}",q);

