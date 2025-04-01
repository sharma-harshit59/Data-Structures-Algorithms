var mostPoints = function(questions) {
    this.memoizedCalculations = {};
    this.questions = questions;
    return calcMaxPoints(0);
};

var calcMaxPoints = function(index) {
    if (index >= this.questions.length) {
        this.memoizedCalculations[index] = 0;
        return 0;
    }
    const points = this.questions[index][0];
    const brainpower = this.questions[index][1];
    if (this.memoizedCalculations[index] === undefined) {
        const pointsIfQuestionSolved = points + calcMaxPoints(index + brainpower + 1);
        const pointsIfQuestionNotSolved = calcMaxPoints(index + 1);
        this.memoizedCalculations[index] = Math.max(pointsIfQuestionSolved, pointsIfQuestionNotSolved);
    }
    return this.memoizedCalculations[index];
}