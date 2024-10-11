alert("basket.js")
let basket=(a,b) => {
    let total=0;
    for(let fruits in a){
        total+= a[fruits] * b[fruits];
        
    }
return total;
}
a={papaya:10, peach:2};
b={papaya:5,peach:4};
let total=basket(a,b);
alert("total cost of basket is ="+total);