//====== chapter # 21 to 25 task 1 =======

// var firstName=prompt("Enter your first name")
// var lastName=prompt("Enter your last name")
// var fullName=firstName+lastName;
// alert("Hello "+fullName)

//====== chapter # 21 to 25 task 2 =======

// var fav=prompt("Enter your  favorite mobile phone model")
// document.write("My favourite phone is: "+fav+"<br>")
// var a=fav.length;
// document.write("Length of string: "+a)

//====== chapter # 21 to 25 task 3 =======

// var a="Pakistani";
// document.write("String: "+a+"<br>")
// var b=a.indexOf("n");
// document.write("Index of 'n': "+b)

//====== chapter # 21 to 25 task 4 =======

// var a="Hello World";
// document.write("String: "+a+"<br>")
// var b=a.lastIndexOf("l");
// document.write("Last index of 'l': "+b)

//====== chapter # 21 to 25 task 5 =======

// var a="Pakistani"
// document.write("String: "+a+"<br>")
// var b=a.charAt(3)
// document.write("Character at index 3 is: "+b)

//====== chapter # 21 to 25 task 6 =======

// var firstName=prompt("Enter your first name")
// var lastName=prompt("Enter your last name")
// var fullName=firstName.concat(lastName)
// alert("Hello "+fullName)

//====== chapter # 21 to 25 task 7 =======

// var a= "Hyderabad";
// var b=a.replace("Hyder","Islam")
// document.write("City: "+a+"<br>")
// document.write("After replacement: "+b)

//====== chapter # 21 to 25 task 8 =======

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<u>Message before replacement of 'and' </u>"+"<br>")
// document.write(message+"<br>")
// message=message.replace(/and/g,"&")
// document.write("<u>Message after replacement of 'and' with '&' </u>"+"<br>")
// document.write(message)

//====== chapter # 21 to 25 task 9 =======

// var num="472"
// var b=parseInt(num)
// document.write("value :"+num+"<br>"+"Type String"+"<br>")
// document.write("value :"+b+"<br>"+"Type Number")

//====== chapter # 21 to 25 task 10 =======

// var a=prompt("Enter Something")
// a=a.toUpperCase()
// document.write(a);

//====== chapter # 21 to 25 task 11 =======

//     var sentence=prompt("Enter a word")
//     sentence = sentence.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));

//====== chapter # 21 to 25 task 12 =======

// var num=35.36
// var b = num.toString()
// document.write("Number: "+num+"<br>")
// var c=b.slice(0,2)
// var d=b.slice(3)
// var e=c+d;
// document.write("Result: "+e)

//====== chapter # 21 to 25 task 13 =======

// var user=prompt("enter your user name")
// if(user=='33'|user=='44'|user=='46'|user=='64'){
//     alert(" enter a valid username")
// }

//====== chapter # 21 to 25 task 14 =======

// var arr =["cake", "apple pie", "cookie", "chips", "patties"];
// var a= prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")\
// a=a.toLowerCase()
// for(var i=0; i<arr.length; i++){
//    if( a==arr[i])
//    {
//       document.write(arr[i]+" is available at index "+i+" in our bakery");
//     break
//    }

//    else 
//     {
//       document.write(a+" is not available in our bakery");
    
//     }
      
// }

//====== chapter # 21 to 25 task 15 =======

// var passw=  /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
// if(value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true
// }
// else
// { 
// alert('Wrong...!')
// return false
// }

//====== chapter # 21 to 25 task 16 =======
// var a="university of karachi";
// a=a.split("")
// for(var i=0 ;i<a.length;i++)
// {
//     document.write(a[i]+"<br>")
// }

//====== chapter # 21 to 25 task 17 =======

// var a=prompt("enter a word")
// document.write("User input: "+a+"<br>")
// var res = a.charAt(a.length-1);
// document.write("Last character of user input: "+res) 

//====== chapter # 21 to 25 task 18 =======

// var a="The quick brown fox jumps over the lazy dog"
// var b=a.toLowerCase()
// var c=b.split(' ')

// var count=0;
// for(var i=0 ; i<c.length ; i++){
//     if(c[i]=="the"){
//         count=count+1;
//     }
   
// }
// document.write("There are "+count+" occurrence(s) of word 'the'")

//====== chapter # 26 to 30 task 1 =======

// var a=prompt("Enter a positive integer")
// document.write("Number: "+a+"<br>")
// var b=Math.round(a)
// document.write("round off value: "+b+"<br>")
// var c=Math.ceil(a)
// document.write("ceil value: "+c+"<br>")
// var d=Math.floor(a)
// document.write("floor value: "+d)

//====== chapter # 26 to 30 task 2 =======

// var a=prompt("Enter negative floating point number")
// document.write("Number: "+a+"<br>")
// var b=Math.round(a)
// document.write("round off value: "+b+"<br>")
// var c=Math.ceil(a)
// document.write("ceil value: "+c+"<br>")
// var d=Math.floor(a)
// document.write("floor value: "+d)

//====== chapter # 26 to 30 task 3 =======

// var a=-5;
// var b=Math.abs(a)
// document.write("The absolute value of "+a+" is "+b)

//====== chapter # 26 to 30 task 4 =======

// var a=(Math.random()*7)
// var b=Math.floor(a)
// document.write("Random Dice Value is: "+b)

//====== chapter # 26 to 30 task 5 =======

// var a=(Math.random()*3)
// var b=Math.floor(a)
// if(b==1){
//     document.write(b+"<br>"+"Random Coin Value: Tails")
// }
// else if(b==2)
// {
//     document.write(b+"<br>"+"Random Coin Value: Heads")
// }

//====== chapter # 26 to 30 task 6 =======

// var a=(Math.random()*101)
// var b=Math.floor(a)
// document.write("Random Number Between 1 and 100 is: "+b)

//====== chapter # 26 to 30 task 7 =======

// var a=prompt("Enter your weight in kilograms")
// var b=parseInt(a)
// document.write("The weight of user is "+b+" Kilograms")

//====== chapter # 26 to 30 task 8 =======

// var a=+prompt("Guess the secret number between 1 to 10")
// var b=10;
// if(a==b)
// {
//     alert("congratulations your answer is correct")
// }
// else{
//     alert("Try Again")
// }

//====== chapter # 31 to 34 task 1 =======

// var a= new Date();
// document.write(a)

//====== chapter # 31 to 34 task 2 =======    
    
// var date = new Date()
// var month =["Januaray","February","March","April","May","June","July","August","September","October","November","December"]
// var getmon = date.getMonth();
// document.write("Current month: "+month[getmon]+"<br>");

//====== chapter # 31 to 34 task 3 =======

// var a= new Date();
// var b=a.toString()
// var c=b.slice(0,3)
// document.write("Today is "+c)

//====== chapter # 31 to 34 task 4 =======

// var now =new Date();
// var theDay = now.getDay();
// if(theDay==0 ||theDay==6)
// alert("It's Fun day")

//====== chapter # 31 to 34 task 5 =======

// var a=new  Date();
// var b=a.getDate()
// if(b<16)
// {
//     document.write("First fifteen days of the month")
// }
// else
// {
//     document.write("Last days of the month")
// }

//====== chapter # 31 to 34 task 6 =======

// var a = new Date();
// a.setFullYear(2020);
// document.write("Current date: "+a+"<br>")
// var b=a.getTime()
// document.write("Elapsed milliseconds since january 1, 1970: "+b+"<br>")
// var c=b/(60*60)
// document.write("Elapsed minutes since january 1, 1970: "+c)

//====== chapter # 31 to 34 task 7 =======

// var a=new Date()
// var b=a.getHours()
// if(b<=12)
// {
// document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }

//====== chapter # 31 to 34 task 8 =======

// var laterDate=new Date("Dec 31 ,2020")
// document.write("Later Date: "+laterDate)

//====== chapter # 31 to 34 task 9 =======

// var date = new Date();
// var gTime = date.getTime();
// var fixDate = new Date("April 23, 2020");
// var gFTime = fixDate.getTime();
// var diff = gTime - gFTime;
// var sol = diff/(1000*60*60*24)
// document.write(Math.floor(sol)+" Days have passed since 1st Ramadan,2020")

//====== chapter # 31 to 34 task 10 =======

// var date =new Date()
// var time = date.getTime()

// var fixDate =new Date("Dec, 2015")
// document.write("<br>"+fixDate)
// var fixTime =fixDate.getTime()

// var todaySec=time-fixDate
// var todaySecpast=(todaySec/1000*60)

// document.write("<br>"+todaySecpast+" Second had passed since today")

//====== chapter # 31 to 34 task 11 =======

// var a= new Date();
// var copy=a.toString()

// var copy1 = copy.slice(0,16)

// var copy2=copy.slice(16,18)

// var had = parseInt(copy2);


// var copy3 = copy.slice(18,58)

// if(had==23){
//     had=00
//     document.write("current date :"+a+"<br>")
//     document.write("1 hour ago,it will")
//     document.write(copy1+had+copy3) 
// }
// else {
//     had=had+1
//     document.write("current date :"+a+"<br>")
//     document.write("1 hour later,it will ")
//     document.write(copy1+had+copy3) 
// }

//====== chapter # 31 to 34 task 12 =======

// var a = new Date();
// a.setFullYear(2020);
// document.write("Current date: "+a+"<br>")
// a.setFullYear(1920);
// document.write("100 years back it was: "+a)

//====== chapter # 31 to 34 task 13 =======

// var a=prompt("Enter your age")
// document.write("Your age is "+a+"<br>")
// var b=2020-a;
// document.write("Your birth year is "+b)

//====== chapter # 31 to 34 task 14 =======

// document.write("<h1>K-Electric Bill</h1>")
// var customerName = "ABC customer"
// document.write("Customer Name: "+customerName+"<br>")
// var date = new Date()
// var month =["Januaray","February","March","April","May","June","July","August","September","October","November","December"]
// var getmon = date.getMonth();
// document.write("Current month: "+month[getmon]+"<br>");
// var units="410"
// document.write("Units: "+units+"<br>")
// var charges="16"
// document.write("Charges per unit: "+charges+"<br><br><br>")
// var netAmount =units*charges;
// document.write(" Net Amount Payable (within Due Date): "+netAmount+"<br>")
// var surcharge=350;
// document.write("Late Payment Surcharge: "+surcharge+"<br>")
// var gross=netAmount+surcharge;
// document.write("Gross Amount Payable (after Due Date): "+gross)

//====== chapter # 35 to 38 task 1 =======

// function date(){
//     var a=new Date();
//     document.write("Current Date: "+a)
// }
// date()

//====== chapter # 35 to 38 task 2 =======

// function greet(a,b){
//     var c=a+b;
//     document.write("Welcome: "+c)
// }
// greet("muhammad","muzammil")

//====== chapter # 35 to 38 task 3 =======

// function add(a,b){
//     a=+prompt("enter first number")
//     b=+prompt("enter 2nd number")
//     var c=a+b;
//     document.write("sum is: "+c)
// }
// add()

//====== chapter # 35 to 38 task 4 =======

// var a=+prompt("Enter First Number")
// var b=prompt("Enter operator")
// var c=+prompt("Enter 2nd Number")

// function calculator(a,b,c)
// {
//     if(b==='+')
// {
//     var d=a+c;
//     document.write("sum of "+a+" and "+c +" is " + d)
// }
// if(b==='')
// {
//     var d=a-c;
//     document.write("difference of "+a+" and "+c +" is " + d)
// }
// if(b==='*')
// {
//     var d=a*c;
//     document.write("multiplication of "+a+" and "+c +" is " + d)
// }
// if(b==='/')
// {
//     var d=a/c;
//     document.write("difference of "+a+" and "+c +" is " + d)
// }
// if(b==='%')
// {
//     var d=a%c;
//     document.write("remainder of "+a+" and "+c +" is " + d)
// }
// return d;
// }
// calculator(a,b,c)

//====== chapter # 35 to 38 task 5 =======

// function square(a)
// {
//     var b=a*a;
//     document.write("Square of: "+a+" is "+b)
//     return b;
// }
// square(9);

//====== chapter # 35 to 38 task 6 =======

// var a = prompt("Enter a number");
// function factorial(){
//   var fact=1;
//    for(var i=1; i<=a; i++){
//       var fact = fact*i;
//    }
//    document.write("Factorial of "+a+" is "+fact);
// }
// factorial();

//====== chapter # 35 to 38 task 7 =======

// var a=+prompt("Enter Starting Number")
// var b=+prompt("Enter Ending Number")
// function counting(a,b)
// {
//     for(var i=a;i<=b;i++)
//     {
//         document.write(i+"<br>")
//     }
// }
// counting(a,b)

//====== chapter # 35 to 38 task 8 =======

// var base =+prompt("enter your base ")
// var pre =+prompt("enter your prependicular")

// function outer(){
//     var hypoo=base*base + pre*pre
//     inner()
//     function inner(){
//         var result=Math.sqrt(hypoo)
//         document.write("<br>"+ result)
//     }
// }
// outer()

//====== chapter # 35 to 38 task 9 =======

// function area(height=10 , width=20)
// {
//     var c=height*width;
//     document.write(c)
// }
// area()

// function area(width,height)
// {
//     var c=width*height;
//     document.write(c)
// }
// area(10,20)

//====== chapter # 35 to 38 task 10 =======

// var word = prompt("Enter a word");
// var check="";
// function palindrome(){
//    for(var i=word.length-1; i>=0; i--){
//       check= check + word[i];
//    }
//    if(word == check){
//       document.write(word+" is a palindrome");
//    }
//    else{
//       document.write(word+" is not a palindrome");
//    }
// }
// palindrome();

//====== chapter # 35 to 38 task 11 =======

// var text ="the quick brown fox"
// var text1=text.split('')

// var leter=text1[0].toUpperCase()
// document.write(leter)

// for(var i=1 ; i<19 ; i++){
//     if(text1[i] === ' '){
//         text1[i+1]=text1[i+1].toUpperCase()
//     }
// }
// for(var i=1 ; i<19 ; i++){
//     document.write(text1[i])
// }

//====== chapter # 35 to 38 task 12 =======

// var str = "Web Development Tutorial"
// var strSplit = str.split(' ')

// var word1 = strSplit[0].length
// var word2 = strSplit[1].length
// var word3 = strSplit[2].length


// function great() {

//     if (word1 >= word2) 
//     {

//         document.write(strSplit[0] + ": is the greatest word")
//     } 
//     else if (word2 >= word3) 
//     {
//         document.write(strSplit[1] + ": is the greatest word")
//     }
//      else 
//      {
//         document.write(strSplit[2] + ":  is the greatest word")
//     }
// }
// great();

//====== chapter # 35 to 38 task 13 =======

// var str = "JSResourceS.com";
// var letter = "o";
// var count=0;

// var strSplit = str.split('')
// function count1(str,letter){

// for (var i=0; i < 15; i++) {
//     if (strSplit[i] === letter) {
//         count = count + 1;
//     }
// }
//  return count;
// }
// var result = count1(str,letter);
// document.write(result)

//====== chapter # 35 to 38 task 14 =======


// function calcCircumference(radius){
//    var Circumferenceofcircle =2*3.142*radius;
//    document.write("Circumference of circle: "+Circumferenceofcircle+"<br>");
// }
// function calcArea(radius){
//    var Areaofcircle =3.142*radius*radius;
//    document.write("Area of circle: "+Areaofcircle);
// }
// calcCircumference(30);
// calcArea(40);