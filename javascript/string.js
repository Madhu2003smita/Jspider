let str = "Qs psi dser";
console.log(str.length);
console.log(str[0]);
console.log(str[4]);

let str1 = str.toUpperCase();
console.log(str1);

let str2 = str1.toLowerCase();
console.log(str2);

let str3 = str.slice(0,4);
console.log(str3);

let str4 = str.indexOf("s",2);
console.log(str4);

let str5 = str.lastIndexOf("s");
console.log(str5);


let str6 = str.charAt(0);
console.log(str6);


let str7 = str.split("");
console.log(str7);

let str8 = str.replace('s',"m");
console.log(str8);

let str9 = str.replaceAll('s',"m");
console.log(str9);