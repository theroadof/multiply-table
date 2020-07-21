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
  var lines=[];
  for(let i=start;i<=end;i++){
    lines.push(generateLine(start,i));
  }
  return lines.join('\n');
}

function generateLine(start,end){
  var line=[];
  for(let i=start;i<=end;i++){
    line.push(generateExpression(i,end));
  }
  return line.join('\t');
}

function generateExpression(start,end){
  const expression = '*';
  return `${start}*${end}=${start*end}`;
}

module.exports = {
  createMultiplyTable,
};
