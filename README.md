# Tree Traversal App - Gabriel Solórzano Chanto

## Table of contents

1. [Problem 1 thought process](#1)
2. [Problem 3 thought process](#3)
3. [App structure](#structure)
4. [Running the App](#run)
5. [Running Tests](#tests)
6. [Bonus](#bonus)

<div id='1'> </div>

## Problem 1 thought process

The code for problem 1 can be located in: \
`src\Helpers\BinTreeGenerator.js`

For the solution of the first problems I thought of creating a recursive algorithm, as when thinking of how a tree is generated I imagine repetitive tasks, let me explain.

Imagine a complex binary tree with many children on the left and right. We can isolate each generation into 2 groups, parent and children. A parent will be the id of the node, and its children will be a binary tree node themselves (we can see them as each being a tree themselves). When we start to generate these trees we create an id for the root and then create a new tree for each children. If we start on the left, then the left node is now a root and we need to create a binary tree for each of its childrens.

Here we see the repetitive pattern. So to reproduce this in code, I used recursion. This allows for a cleaner code and more direct implementation from the idea I have, where just doing the following logic:

```js
return new BinTreeNode(
  array[0],
  GenerateTree(array[1]),
  GenerateTree(array[2])
);
```

Will yield assigning the id of the node to the root, and calling to generate the tree again for each children.

<div id='3'> </div>

## Problem 3 thought process

For the solution of finding the smallest subtree with the deepest nodes, I followed a similar approach to problem 1.

First I need to know which child has the greatest depth, to do this I follow this logic:

I need to calculate the depth of each child, so this means going to the end of the tree and count how deep we are. This can be done with recursion where we traverse the tree until we get to the bottom and start to add the times we went down in the tree.

Having both of the heights we can then check which child is deeper, this indicates where the deepest nodes will be. Then we will go ahead and call recursively to the deepest child until we get to the base case. This will be that both of the nodes we are in right now are the same height. This means we found ourselves the smallest deepest subtree. In this solution I added a boolean flag to indicate which node is the root of the smallest deepest subtree. This will allow me to draw the green 2px border with ease on the root that has this flag on true.

Some assumptions I made where that the tree Im getting is already generated with the correct structure from the previous problems. Some engineering tradeoffs I made in all my solutions are using recursion. Recursion is not bad, but can generate problems if not implemented properly. These solutions could be made iteratively, but I like to be able to imagine my solution and print it in code without having to do many translations. For these exercises this was easily done with the aid of recursion.

<div id='structure'> </div>

## App structure

The app is utilizing react, with a project created using create-react-app. As main language its using Javascript. For state management I decided to use React Hooks. The external libraries intalled are:

- Bootstrap 5
- Bootstrap-icons

<div id='run'> </div>

## Running the App

To run the app follow these steps

1. Run the dependency installer with the command: `yarn`
2. Start the application with the following command: `yarn start`

Inisde the Samples folder you will find 2 files with the samples given in the instructions for problem 1 to test out the solution.

<div id='tests'> </div>

## Running Tests

To run the unit tests in the app run the following command: `yarn test`

If greeted with the message: `No tests found related to files changed since last commit.` \
Click `a` to run all the tests inside the repository

<div id='bonus'> </div>

## Bonus

For the bonus features I decided to tinker with the UI placements. In the example all the elements where located in a vertical way, which left many white unused space in the browser. I decided to change the output placement to be on the right-hand side of the view. This allows the users to have to move less and be able to have in view both the text area and the output diagram.

I also decided to add a clear button next to the fetch to allow the users to clear the page without having to refresh the view.
