/*
207. Course Schedule
Medium
Topics
Companies
Hint
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function(numCourses, prerequisites) {
    // Create an adjacency list representation of the graph
    const graph = new Array(numCourses).fill(0).map(() => []);
    // Array to keep track of the number of prerequisites for each course
    const inDegree = new Array(numCourses).fill(0);

    // Populate the adjacency list and inDegree array
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course); // Add edge from prereq to course
        inDegree[course]++; // Increment in-degree of the course
    }

    // Initialize a queue with courses that have no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Perform topological sorting
    let count = 0; // Counter to keep track of the number of courses without prerequisites
    while (queue.length > 0) {
        const course = queue.shift(); // Take a course without prerequisites
        count++; // Increment the count

        // Update inDegree and add courses that have no prerequisites now
        for (const neighbor of graph[course]) {
            inDegree[neighbor]--; // Decrement in-degree
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor); // Add to the queue if no more prerequisites
            }
        }
    }

    // If count is equal to the number of courses, it means all courses can be taken
    return count === numCourses;
};
