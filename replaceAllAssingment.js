function replaceFunc(str,searched,replaced){

    let lowerStr = str.toLowerCase();
    let stringCollection = lowerStr.split(" ");

    for(let i = 0; i< stringCollection.length;i +=1){

       if(stringCollection[i]===searched){
           stringCollection[i] = replaced;
        }
    }
return stringCollection.join(" ");
}
let result = replaceFunc("bmw mazda toyota BMW Toyota bmw","bmw","fast car");
console.log(result);