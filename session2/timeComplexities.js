/*
    Time Complexity

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm
        - time complexity
        - space complexity

    time complexity => amount of time taken by an algorithm to run!
    space complexity => amount of space taken by an algorithm to run!

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Oh) - Upper bound
    2. Big - 'Ω' (Omega) - Lower bound
    3. Big - 'θ' (Theta) - Tight bound

    Situtations/Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper bound, worst case - Big - 'O'
*/

/*
    Example:

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case (first element): If the key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1
    Case (middle element): If the key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)
    Case (last element): If the key = 10, Comparisons => 10 => Worst Case => O(N)
         (element not present): If the key = 13, Comparisons => 10 => O(N)
*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N + M)


    let a = 0, b = 0; // declarations, conditionals, expressions, assignments, etc.
    => O(1), Constant time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    Total executions = values of i
    i = 0, 1, 2, 3, 4, 5, 6, ...., N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5, 6, ..., M-1 => M

    Total Complexity = T(N, M) = 1 + N + M
                               = N + M (Since 1 is constant)
                               = O(N + M)
*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    total time complexity = 1 + N + N
                          = 1 + 2N
                          = 2N (Since 1 is a constant)
                          = N (Since 2 is a costant)
                          = O(N)
*/

/*
    Example 3:

    let a = 0, b = 0;
    let M = N;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time complexity = 1 + N + N 
                    = 1 + 2N
                    = 2N
                    = N
                    = O(N)
*/

/*
    Example 4:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity = 1 + N * N
                    = N * N
                    = N^2
                    = O(N^2)

    N = 4, 
        i = 0; j = 0, 1, 2, 3 => 4 times 
        i = 1; j = 0, 1, 2, 3 => 4 times
        i = 2; j = 0, 1, 2, 3 => 4 times
        i = 3; j = 0, 1, 2, 3 => 4 times
    
        total executions = 4 + 4 + 4 + 4
                         = 16 times
    
    N = 5,
        i = 0; j = 0, 1, 2, 3, 4 => 5 times 
        i = 1; j = 0, 1, 2, 3, 4 => 5 times
        i = 2; j = 0, 1, 2, 3, 4 => 5 times
        i = 3; j = 0, 1, 2, 3, 4 => 5 times
        i = 4; j = 0, 1, 2, 3, 4 => 5 times

        total executions = 5 + 5 + 5 + 5 + 5
                         = 25 

    For N = 4, executions = 16
    For N = 5, executions = 25
    For N = 6, executions = 36

    time complexity = N^2
                    = O(N^2)
*/

/*
    Example: 5

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity = ?

    1. Make some assumptions on N

    Assume N = 5,

    i = 0; j = 5, 4, 3, 2, 1 => 5
    i = 1; j = 5, 4, 3, 2 => 4
    i = 2; j = 5, 4, 3 => 3
    i = 3; j = 5, 4 => 2
    i = 4; j = 5 => 1

    total number of executions = 5 + 4 + 3 + 2 + 1
                               = 15
    
    2. Summarize all the assumed N values and their number of executions

    For N = 4, executions = 10
    For N = 5, executions = 15
    For N = 6, executions = 21
    For N = 10, executions = 55

    3. Find the pattern or relationship between the N and the number of executions

    Executions = Sum of the first N natural numbers
               = N + N-1 + N-2 + N-3 +....+ 2 + 1
               = [N*(N+1)]/2
    
    T(N) = 1 + [N*(N+1)]/2
         = [N*(N+1)]/2
         = 1/2 * [N*(N+1)]
         = [N*(N+1)]
         = N^2 + N
         = N^2 (Since N^2 is the highest degree polynomial)
         = O(N^2)

*/

/*
    Example: 6

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity = ?

    N = 6, i = 3, 4, 5, 6 => 4
    N = 5, i = 3, 4, 5=> 3

    Outer loop: N/2 + 1

    Inner loop:

    j = 2, 4, 8, 16, 32, 64, 128, 256, ...., N

    For N = 10; j = 2, 4, 8; executions = 3
    For N = 29; j = 2, 4, 8, 16; executions = 4
    For N = 30; j = 2, 4, 8, 16; executions = 4
    For N = 31; j = 2, 4, 8, 16; executions = 4
    For N = 40; j = 2, 4, 8, 16, 32; executions = 5

    2^X = N, X is unknown, Solve for X?

    N = 10, executions = 3, log2(N) = 3

    Total time complexity = 1 + (N/2 + 1) * log2(N)
                          = N/2 * log2(N) + log2(N)
                          = 1/2 * N * log2(N) + log2(N)
                          = N log2(N)
                          = O(N log2(N))

*/

console.log(`For N = ${10}, number of executions = ${Math.log2(10)}`);
console.log(`For N = ${29}, number of executions = ${Math.log2(29)}`);
console.log(`For N = ${30}, number of executions = ${Math.log2(30)}`);
console.log(`For N = ${31}, number of executions = ${Math.log2(31)}`);
console.log(`For N = ${40}, number of executions = ${Math.log2(40)}`);

/*
    O(2^N)

    Problem: Given an array of values, find and print all the different ways we cn select the values from the array.

    Input: [1, 2, 3]
    Output: 

    0 values => ()
    1 values => (1), (2), (3)
    2 values => (1, 2), (1, 3), (2, 3)
    3 values => (1, 2, 3)

    Number of ways = 8

    Input: [1, 2, 3, 4]
    Output:

    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    number of ways = 16

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    O(2^N)
*/

/*
    Problem: Given a string S, find and print all the permutations of the string

    Input: 'abc'
    Output:

    abc
    acb
    bac
    bca
    cab
    cba

    executions = 6

    Input: ab
    Output:

    ab
    ba

    Input: abcd
    Output:

    abcd
    abdc
    acdb
    acbd
    badc
    bcda
    bdca
    cabd
    cbda
    cadb
    ...
    ...

    number of ways or executions = 24

    N = 3, number of ways = 6
    N = 2, number of ways = 2
    N = 4, number of ways = 24

    O(N!)

    N! = N * N-1 * N-2 * N-3 * .... * 1

    5! = 5 * 4 * 3 * 2 * 1 = 120
*/