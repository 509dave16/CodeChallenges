var shortestPropagationTime = 1000000;
var isDebug = false;
var fs  = require("fs");
var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
var numberOfRelations = lines.shift();
var relationSets = parseInput(lines);

if(isDebug)
{
    console.log("Number of relations: " + numberOfRelations);
    for(var relationSetIndex = 0; relationSetIndex < relationSets.length; relationSetIndex++)
    {
        var relationSet = relationSets[relationSetIndex];
        console.log("Node " + relationSetIndex + "s relationships:");
        if(typeof relationSet !== "undefined")
        {
            for(var relationIndex = 0; relationIndex < relationSet.length; relationIndex++)
            {
                var relation = relationSet[relationIndex];
                console.log("Related to Node " + relation);
            }
        }
    }
}
var propagationTimeSets = computeShortestPropagationTime(relationSets);
console.log(shortestPropagationTime);
if(isDebug)
{
    
    for(var startNodeIndex = 0; startNodeIndex < propagationTimeSets.length; startNodeIndex++)
    {
        console.log("Start Node " + startNodeIndex);
        var propagationTimeSet = propagationTimeSets[startNodeIndex];
        for(var nodeIndex = 0; nodeIndex < propagationTimeSet.length; nodeIndex++)
        {
            console.log("Hours to reach Node " + nodeIndex + ": " + propagationTimeSet[nodeIndex]);
        }
    }
}

function computeShortestPropagationTime(relationSets)
{
    var propagationTimeSets = [];
    for(var relationSetIndex = 0; relationSetIndex < relationSets.length; relationSetIndex++)
    {
        if(typeof relationSets[relationSetIndex] !== "undefined")
        {
            var pts = computePTFromNode(relationSets, relationSetIndex);
            Math.getMax
            propagationTimeSets[relationSetIndex] = pts;
        }
    }
    return propagationTimeSets;
}

function computePTFromNode(relationSets, sourceNode)
{
    var longestHours = 0;
    //indicates all of the entities whose relationships have been traversed
    var searchedNodeRelationships = [];
    //keeps track of the previous entities for which relationships have been traversed
    var previousNodes = [];
    var previousNodesIndex = [];
    var nodeIndexStart = 0;
    var hoursToNode = [];
    var hours = 0;
    hoursToNode[sourceNode] = hours;
    previousNodesIndex[sourceNode] = nodeIndexStart;
    //indicates the node whose relationships will be traversed
    var currentNode = sourceNode;
    //indicates that we keep looping in the outer while
    var pathsExhausted = false;

    //loop until either the found or not found break is processed
    while (pathsExhausted === false)
    {
        hours = hoursToNode[currentNode];
        if(hours > shortestPropagationTime)
        {
            break;
        }
        //indicates that a relation to another node was found
        var relationFound = false;
        //mark that this node's relationships are being checked
        searchedNodeRelationships[currentNode] = 1;
        //grab node's realtionships if node is defined
        var nodeRelationships = relationSets[currentNode];

        //see if there is a relation to another node
        for (var nodeIndex = nodeIndexStart; nodeIndex < nodeRelationships.length; nodeIndex++)
        {
            var node = nodeRelationships[nodeIndex];
            //Make sure it hasn't been searched and that it's
            //not the source or current node.
            //If so break out of loop to start traversing
            //the next node's relationships.
            if (typeof searchedNodeRelationships[node] === 'undefined')
            {
                relationFound = true;
                break;
            }
        }
        //Remember current node and relation and then
        //set next node whose relationships will be traversed
        if (relationFound === true)
        {
            previousNodes.push(currentNode);
            previousNodesIndex[currentNode] = nodeIndex+1;
            currentNode = node;
            hours += 1;
            if(hours > longestHours)
            {
                longestHours = hours;
            }
            hoursToNode[node] = hours;
            nodeIndexStart = 0;
            
        }
        //traversed all the node's relationships
        else
        { //either stop because there's no more source
            //node relationships to check
            if (previousNodes.length === 0)
            {
                pathsExhausted = true; //not found
            }
            else
            {
                //or backtrack to previous node
                currentNode = previousNodes.pop();
                nodeIndexStart = previousNodesIndex[currentNode];
            }
        }
    }
    shortestPropagationTime = shortestPropagationTime > longestHours ? longestHours : shortestPropagationTime;
    //console.log(shortestPropagationTime);
    return hoursToNode;
}

function parseInput(inputLines)
{
    var relationSets = [];
    for(var relationIndex = 0; relationIndex < inputLines.length ; relationIndex++)
    {
        var rawRelation = inputLines[relationIndex].split(" ");
        var leftSide = parseInt(rawRelation[0]);
        var rightSide = parseInt(rawRelation[1]);
        if (typeof relationSets[leftSide] === 'undefined') 
        {
            relationSets[leftSide] = [];
        }
        relationSets[leftSide].push(rightSide);
        if (typeof relationSets[rightSide] === 'undefined') 
        {
            relationSets[rightSide] = [];
        }
        relationSets[rightSide].push(leftSide);
    }
    return relationSets;
}