
module.exports = {
  /**
   * Responsible for parsing a number of relations, each of which is a pair of nodes.
   * The resulting data structure that is returned is a 2-D array representing the a set of
   * associations for each node in the network.
   */
  parseInput: function (inputLines) {
    var relationSets = [];
    for (var relationIndex = 0; relationIndex < inputLines.length; relationIndex++) {
      var rawRelation = inputLines[relationIndex].split(" ");
      var leftSide = parseInt(rawRelation[0]);
      var rightSide = parseInt(rawRelation[1]);
      if (typeof relationSets[leftSide] === 'undefined') {
        relationSets[leftSide] = [];
      }
      relationSets[leftSide].push(rightSide);
      if (typeof relationSets[rightSide] === 'undefined') {
        relationSets[rightSide] = [];
      }
      relationSets[rightSide].push(leftSide);
    }
    return relationSets;
  }
};