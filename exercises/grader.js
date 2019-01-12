average = (scores) => {
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  })
  let avg = sum / scores.length;
  return Math.round(avg);

}


const scores = [90, 98, 89, 100, 100, 86, 94];

console.log(average(scores));