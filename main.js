function createMultiplyTable(start, end) {
  if(isValid(start,end)){
    return generateAllLines(start,end);
  }
  return null;
}

function isValid(start,end){
  if(start>end){
    return false;
  }
  if((start<1 && start>1000)||(end<1 && end>1000)){
    return false;
  }
  return true;
}

function generateAllLines(start,end){
  var lines='';
  for(let i=start;i<=end;i++){
    if(i<end){
      lines+=generateLine(start,i);
      lines+='\n';
    }else{
      lines+=generateLine(start,i);
    }
  }
  return lines;
}

function generateLine(start,end){
  var line='';
  for(let i=start;i<=end;i++){
    line+=generateExpression(i,end);
  }
  return line;
}

function generateExpression(start,end){
  const expression = '*';
  if(start===end){
    return `${start}*${end}=${start*end}`;
  }else{
    return `${start}*${end}=${start*end}\t`;
  }
}

module.exports = {
  createMultiplyTable,
};
