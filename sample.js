let posts = [
    {
        author: 'saransh',
        title: 'Learning context API and the useContext React hook',
        year: 2013
    },
    {
        author: 'pranshu',
        title: 'Machine Learning Misconceptions That Software Developers Have',
        year: 2013
    },
    {
        author: 'saransh',
        title: 'Understanding the useReducer hook in React',
        year: 2023
    },
];

// Expected Output:
// {
//     "saransh": [{
//             "author": "saransh",
//             "title": "Learning context API and the useContext React hook"
//         },
//         {
//             "author": "saransh",
//             "title": "Understanding the useReducer hook in React"
//         }
//     ],
//     "pranshu": [{
//         "author": "pranshu",
//         "title": "Machine Learning Misconceptions That Software Developers Have"
//     }]
// }

const groupBy = (inputArr,key) => {
    return inputArr.reduce((acc, currentValue) => {
        console.log({acc, currentValue});
        let groupKey = currentValue[key];
        console.log(groupKey);
        if(!acc[groupKey]) acc[groupKey] = []
        acc[groupKey].push(currentValue);
        return acc;
    },{})
}

const res = groupBy(posts, 'author');
console.log(res)

const res2 = groupBy(posts, 'year');
console.log(res2)