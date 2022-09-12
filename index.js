function getChange(insertedMoney, price) {
  let returnMoney=Number(insertedMoney-price).toFixed(2);
  //console.log(`returnMoney ${returnMoney}`);
  let returnArray = [0,0,0,0,0,0];

  while(returnMoney!=0 && returnMoney>0){
    //console.log(returnMoney);
    if(Math.floor(returnMoney/1)>0){
      returnArray[5]+=1;
      returnMoney-=1;
      returnMoney=Number(returnMoney).toFixed(2);
    }
    else if(Math.floor(returnMoney/0.5)>0){
      returnArray[4]+=1;
      returnMoney-=0.5;
      returnMoney=Number(returnMoney).toFixed(2);
    }
    else if(Math.floor(returnMoney/0.25)>0){
      returnArray[3]+=1;
      returnMoney-=0.25;
      returnMoney=Number(returnMoney).toFixed(2);
    }
    else if(Math.floor(returnMoney/0.1)>0){
      returnArray[2]+=1;
      returnMoney-=0.1;
      returnMoney=Number(returnMoney).toFixed(2);
    }
    else if(Math.floor(returnMoney/0.05)>0){
      returnArray[1]+=1;
      returnMoney-=0.05;
      returnMoney=Number(returnMoney).toFixed(2);
    }
    else if(Math.floor(returnMoney/0.01)>0){
      returnArray[0]+=1;
      returnMoney-=0.01;
      returnMoney=Number(returnMoney).toFixed(2);
    }
  }

  return returnArray;
}

function getChangeTwo(insertedMoney, price) {
  let array = [1,0.5,0.25,0.1,0.05,0.01];
  array = array.reverse();

  let returnMoney=Number(insertedMoney-price).toFixed(2);
  //console.log(`2 returnMoney ${returnMoney}`);

  let returnArray = new Array(array.length).fill(0);
  let index = array.length-1;

  while(returnMoney!=0){
    let count = Math.floor(returnMoney/array[index]);
    returnMoney = Number(returnMoney - count * array[index]).toFixed(2);
    returnArray[index]=count;
    index--;
  }

  return returnArray;
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

/*
getChange(3.14,1.99) // should return [0,1,1,0,0,1]
getChangeTwo(3.14,1.99)

getChange(3, 0.01) // should return [4,0,2,1,1,2]
getChangeTwo(3, 0.01)
   
getChange(4, 3.14) // should return [1,0,1,1,1,0]
getChangeTwo(4, 3.14)
   
getChange(0.45, 0.34) // should return [1,0,1,0,0,0]
getChangeTwo(0.45, 0.34)
*/

console.log(arrayEquals(getChange(3.14,1.99),[0,1,1,0,0,1]))
console.log(arrayEquals(getChange(3.14,1.99),[0,1,1,0,0,1]))

console.log(arrayEquals(getChange(3, 0.01),[4,0,2,1,1,2]))
console.log(arrayEquals(getChange(3, 0.01),[4,0,2,1,1,2]))

console.log(arrayEquals(getChange(4, 3.14),[1,0,1,1,1,0]))
console.log(arrayEquals(getChange(4, 3.14),[1,0,1,1,1,0]))

console.log(arrayEquals(getChange(0.45, 0.34),[1,0,1,0,0,0]))
console.log(arrayEquals(getChange(0.45, 0.34),[1,0,1,0,0,0]))