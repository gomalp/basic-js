function countCats(mas){
    const CAT="^^";
    let count=0;
    mas.forEach(function(item) {
        if(item.includes(CAT,0)) count+=1});
      return count;
}
