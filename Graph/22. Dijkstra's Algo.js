/**
 *
 * queue, priority queue, set can be used for Dijkstra's algo
 * set > PQ > Q, in terms of performance
 *
 */

/**
 * Priority Queue Approach
 *
 * Algo -
 * Initial conf;
 * min-heap that stores {dist, node}, shortest distance will be at top
 * distance array - dist[], initialise all the indecies with infinity
 *
 * step 1 - dist[0] = 0, insert {0, 0} in pq
 * step 2 - take out from top (least dist) of pq but if distance of 2 items in pq are same then
 *    whichever node came earlier will be taken out
 * step 3 - repeat for the adjacent nodes for node taken out.
 */
