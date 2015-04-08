//Stores shortest propagation time.
var shortestPropagationTime = 1000000;
//Keeps track of source nodes for which SPT has been computed.
var sourceNodesComputed = [];
var fs  = require("fs");
//Read in number of relations and relations.
var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
//Grab number of relations.
var numberOfRelations = lines.shift();
//Parse the relations into relation sets.
var relationSets = parseInput(lines);
computeShortestPropagationTime(relationSets);
console.log(shortestPropagationTime);

//For each node in compute the time it takes to propagate the broadcast.
function computeShortestPropagationTime(relationSets)
{
    //Relation set of source node.
    var currentRelationSet = [];
    //Determine first non-leaf node to begin computing the SPT.
    for(var relationSetIndex = 0; relationSetIndex < relationSets.length; relationSetIndex++)
    {
        if(typeof relationSets[relationSetIndex] !== "undefined" && relationSets[relationSetIndex].length !== 1)
        {
            currentRelationSet = relationSets[relationSetIndex];
            break;
        }
    }
    //Determine when computing of SPT is done.
    var foundOptimalSourceNode = false;
    while(foundOptimalSourceNode === false)
    {
        //Determines if their is a neighbor node with a shorter SPT than the current node.
        var neightborNodeHasSPT = false;
        for(var relationIndex = 0; relationIndex < currentRelationSet.length; relationIndex++)
        {
              var neighborNode = currentRelationSet[relationIndex];
              //Compute SPT for node if it's not leaf-node or if it has been computed yet for the node.
              if(relationSets[neighborNode].length !== 1 && typeof sourceNodesComputed[neighborNode] === "undefined")
              {
                  //Determines 
                  neightborNodeHasSPT = computePTFromNode(relationSets, neighborNode);
                  sourceNodesComputed[neighborNode] = 1;
                  if(neightborNodeHasSPT)
                  {
                      //Get relation set for next source node to compute.
                      currentRelationSet = relationSets[neighborNode];
                      //Reset reltaion index.
                      relationIndex = 0;
                      break;
                  }
              }
        }
        //No neighbor source node could be found that had a better SPT. We're done.
        if(neightborNodeHasSPT === false)
        {
            foundOptimalSourceNode = true;   
        }
    }
}

//Compute longest propagation time from source node.
function computePTFromNode(relationSets, sourceNode)
{
    //Used to determine the longest propagation path
    //which represents the propagation time from the source node.
    var longestHours = 0;
    //Indicates all of the nodes whose relationships have started being traversed.
    var searchedNodeRelationships = [];
    //Keeps track of the previous nodes whose relationships were being traversed.
    var previousNodes = [];
    //Indicates where the traversal should start for a previous nodes relationships.
    var previousNodesIndex = [];
    var nodeIndexStart = 0;
    //Keeps track of the hours taken to reach each node.
    var hoursToNode = [];
    var hours = 0;
    hoursToNode[sourceNode] = hours;
    previousNodesIndex[sourceNode] = nodeIndexStart;
    //Indicates the node whose relationships will be traversed.
    var currentNode = sourceNode;
    //Will only become true once there are no more available relationships to traverse.
    var relationsExhausted = false;

    //Loop until paths are exhausted.
    while (relationsExhausted === false)
    {
        //Grab hours.
        hours = hoursToNode[currentNode];
        //Stop computing time propagation from source node, if time taken so
        //far is greater than shortest time computed so far.
        if(hours === shortestPropagationTime)
        {
            break;
        }
        //Indicates that a relation to another node was found.
        var relationFound = false;
        //Mark that this node's relationships are being checked.
        searchedNodeRelationships[currentNode] = 1;
        //Grab node's realtionships.
        var nodeRelationships = relationSets[currentNode];

        //See if there is a relation to another node.
        for (var nodeIndex = nodeIndexStart; nodeIndex < nodeRelationships.length; nodeIndex++)
        {
            var node = nodeRelationships[nodeIndex];
            //Make sure that the next node's relationships haven't been searched.
            //If so break out of loop to start traversing
            //the next node's relationships.
            if (typeof searchedNodeRelationships[node] === 'undefined')
            {
                relationFound = true;
                break;
            }
        }
        //Remember current node and time taken and then
        //set next node whose relationships will be traversed.
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
        //Traversed all the node's relationships.
        else
        {  
            //Either stop because there's no more previous
            //node relationships to traverse
            if (previousNodes.length === 0)
            {
                relationsExhausted = true;
            }
            //or backtrack to previous node.
            else
            {

                currentNode = previousNodes.pop();
                nodeIndexStart = previousNodesIndex[currentNode];
            }
        }
    }
    //If the longest propagation time from the source node is shorter than the current best time,
    //then the longestHours becomes the new shortestPropagtionTime.
    if(shortestPropagationTime > longestHours)
    {
        shortestPropagationTime = longestHours;
        //Indicates a shorter time was found
        return true;
    }
    //Indicates that SPT computed for source node is not the best so far.
    return false;
    
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