function countCats(mas){
    const CAT="^^";
    let count=0;
    mas.forEach(function(item, index, array) {
        if(item.includes(CAT,0)) count+=1; 
      });
      return count;
}
console.log(countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]));