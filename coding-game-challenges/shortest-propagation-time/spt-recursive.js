'use strict';
const sptUtility = require('./spt-utility.js');
const fs  = require("fs");
var fileName = process.argv[2];
//var inputFileNum = /\d/.exec(fileName)[0];
console.log(inputFileNum);
console.time(fileName);
var inputLines = fs.readFileSync(fileName).toString().split('\n');
inputLines.shift();//Remove first line which indicates number of relations
const relationSets = sptUtility.parseInput(inputLines);
const spt = computeShortestPropagationTime(relationSets);
console.log(`${fileName}: ${spt}`);
console.timeEnd(fileName);

function computeShortestPropagationTime(nodeNeighbors) {
  let neighborNodeHasBetterSPT = true;
  let computedNodes = [];
  //const initialNode = 0;
  const initialNode = nodeNeighbors.reduce((maxNeighborsNode, neighbors, node, nodeNeighbors ) => {
    return neighbors.length > nodeNeighbors[maxNeighborsNode].length ? node : maxNeighborsNode;
  }, 0);//assuming 0 index exists

  let neighbors = nodeNeighbors[initialNode];
  let previousState = computePropagationTime({nodeNeighbors: nodeNeighbors, spt: 1000000, computedNodes: computedNodes }, initialNode);

  while(neighborNodeHasBetterSPT) {
    let currentState = neighbors.reduce(computePropagationTime, previousState);
    if(currentState.node === previousState.node) {
      break;
    }
    neighbors = nodeNeighbors[currentState.node];
    neighbors = neighbors.filter((node) => computedNodes[node] === undefined);
    previousState = currentState;
  }

  const numOfNodesComputed = computedNodes.reduce((counter, value) => counter + 1, 0);
  const numOfNodes = nodeNeighbors.reduce((counter, value) => counter + 1, 0);
  console.log('Num Of Nodes: ' + numOfNodes);
  console.log('Num Of Nodes Computed: ' + numOfNodesComputed);
  console.log('Percentage of Nodes Computed: ' + (numOfNodesComputed/numOfNodes));
  return previousState.spt;
}

function computePropagationTime(previousState, node) {
  const nodesVisited = [];
  nodesVisited[node] = 0;
  const finishedComputing = propagate({
    node: node,
    timeToNode: 0,
    nodesVisited: nodesVisited,
    nodeNeighbors: previousState.nodeNeighbors,
    spt: previousState.spt
  });

  if (!finishedComputing) {
    previousState.computedNodes[node] = -1;
    return previousState;
  }

  const maxSpt = nodesVisited.reduce((maxValue, currentValue) => {
    return currentValue > maxValue ? currentValue : maxValue;
  }, -1);
  previousState.computedNodes[node] = maxSpt;


  const properties = {};
  if (maxSpt < previousState.spt) {
    properties.spt = maxSpt;
    properties.node = node;
  }
  return Object.assign({},previousState,properties);
}

function propagate(state) {
  if (state.timeToNode === state.spt) {
    return false;
  }
  const neighbors = state.nodeNeighbors[state.node];
  const timeToNeighbor = (state.timeToNode + 1);

  const notVisitedNeighbors = neighbors.filter((neighbor) => {
    if (state.nodesVisited[neighbor] !== undefined) {
      const previousTimeToNeighbor = state.nodesVisited[neighbor];
      if(timeToNeighbor < previousTimeToNeighbor) {
        state.nodesVisited[neighbor] = timeToNeighbor;
        return true;
      }
      return false;
    } else {
      return true;
    }
  });

  const neighborsStates = notVisitedNeighbors.map((neighbor) => {
    const neighborState = Object.assign({},state,{ node: neighbor, timeToNode: timeToNeighbor});
    state.nodesVisited[neighbor] = timeToNeighbor;
    return neighborState;
  });

  return neighborsStates.reduce( (continueComputing, neighborState) => {
    if(continueComputing) {
      return propagate(neighborState);
    }
    return false;
  }, true);
}