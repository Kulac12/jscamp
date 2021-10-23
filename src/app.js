console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
console.log(dolarDun)

//const  = sabit demek
const euroDun =11.2
// euroDun =11  eğer bir değer atandıysa ikinci bir değer ataması yapamayız.


console.log(euroDun)


//var ı unut onun yerine let kullan.

//array
//camelCasing --->konutKredileri ilk harf küçük ikinci harf büyük şekilde tanımlama yapılır
//PascalCasing --->kelimenin ilk harfi büyük
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi",  "Kamu konut Kredisi","Özel Komut Kredieri"]

console.log("<ul>")
for (let i  = 0; i < konutKredileri.length; i++) {
    console.log("<li>" +konutKredileri[i]+"</li>")
    
}
console.log("<ul>")
console.log(konutKredileri)

//react --->Js kullanan ileri bir kütüphane
