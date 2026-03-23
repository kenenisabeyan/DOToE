function calculateScore(taskCompletion=1, submissionTime=1, bonusQuality=1){
  return (taskCompletion*50) + (submissionTime*30) + (bonusQuality*20);
}
module.exports = calculateScore;