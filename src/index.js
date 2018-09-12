/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var triangles = 0;

    for (let i = 0; i < preferences.length; i++) {
        let num = preferences[i];
        let indexes = [];

        if (num == 0) continue;

        for(let j = 0; j < 3; j++) {
            indexes.push(num - 1);
            num = preferences[num - 1];
        }

        if(preferences[i] == num) {
            triangles++;
            for(let k = 0; k < preferences.length; k++) {
                if (indexes.indexOf(k) != -1) preferences[k] = 0;
            }
        } else break;
    }

    return triangles;
};
