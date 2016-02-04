
#Challenge
Here at Teads we know that to maximize the impact of an advertisement, the message needs to spread far and quickly.
 
You are given data to calculate viral potential, represented by a network of people ready to relay a message to more people.
We can assume this network contains no cyclic relation. 
For example, if person #1 has a relation with person #2 and if person #2 has a relation with person #3, then it is impossible for #3 to have a direct relation with #1.
 
When an individual broadcasts a message, it is counted as a single step, meaning that the time it takes to broadcast the message is independant from the amount of people in direct relation with the individual. We will consider that this event will always take 1 hour.
 
Here is an example with persons #1, #2, #3, #4, #5, #6, #7 and #8 linked like so:
 
![Alt Text](http://code.codingame.com/fileservlet?id=438097898883 "Missing Image for Diagram")
 
Here, by choosing to start propagation of the message with person #1, 4 hours will be needed to share the message to the entire network:

![Alt Text](http://code.codingame.com/fileservlet?id=438112355735 "Missing Image for Diagram")

1.   \#1 relays the message to #2
2.   \#2 then relays it to #3
3.   \#3 relays it to #4 and #7.
4.   \#4 relays it to #5 and #6, while #7 relays it to #8
 
If we decide now to start the propagation with person #3, then only 2 hours are needed:
 
![Alt Text](http://code.codingame.com/fileservlet?id=438103072669 "Missing Image for Diagram")
 
1.   \#3 relays the message to #2, #4 and #7
2.   \#2 relays it to #1 ; #4 relays it to #5 and #6 ; #7 relays it to #8
 
In this exercice, your mission consists in finding the minimal amount of hours it would take for a message to propagate across the entire network given to you as input.
 
INPUT:
Line 1 : N the number of adjacency relations.
N next lines: an adjancency relation between two people, expressed as X (space) Y, meaning that X is adjacent to Y.
 
OUTPUT :
The minimal amount of steps required to completely propagate the advertisement.
 
CONSTRAINTS :
0 < N < 150000
0 ≤ X,Y < 200000

##Challenge source: http://www.codingame.com/contests

#How to test my solution
<strong>(NOTE OPTION 1. IS NO LONGER VALID SINCE THE CHALLENGE IS NO LONGER ADVERTISED ON CODINGGAME)</strong>
##~~1. Using Coding Game's Challenge IDE~~
- ~~Copy the text from shortest-progagation-time-solution.js.~~
- ~~Paste into the Teads.tv Sponsored Challenge IDE at http://www.codingame.com/contests.~~
- ~~Click the Settings cog at the top right of the screen and select "Javascript" as the language of the solution.~~
- ~~Click "PLAY ALL TESTS" at the bottom right of the screen.~~

##2. Using NodeJS
- Install NodeJS by following the instructions at the website: https://nodejs.org/
- Download the CodeChallenges repo from Github: https://github.com/509dave16/CodeChallenges and extract the contents of the zip
- Or clone the repo using: git clone https://github.com/509dave16/CodeChallenges.git
- Using the Command Prompt or Terminal navigate to the following directory:<br>
<strong>CodeChallenges/coding-game-challenges/shortest-propagation-time/</strong>
- Then run the following commands:<br>
<strong>npm install</strong><br>
<strong>gulp</strong>
- The output from running <strong>gulp</strong> will be the Shortest Propagation Time for each input file.
- Each input file has a corresponding output file according to the number postfix(e.g. spt-test-in.0.txt and spt-test-out.0.txt).
- Each output file contains the validated SPT from the codinggame site merely for reference.

#Proof of Challenge Completion
![Alt Text](http://s23.postimg.org/hd4y32egr/teads_tv_challenge_proof.png "Missing Image for Diagram")
