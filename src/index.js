/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns currentItember of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var triangles = 0;

    for (let i = 0; i < preferences.length; i++) {
        let currentItem = preferences[i];
        let indexes = [];

        if (currentItem == 0) continue;

        for(let j = 0; j < 3; j++) {
            indexes.push(currentItem - 1);
            currentItem = preferences[currentItem - 1];
        }

        if(preferences[i] == currentItem) {
            let checkIndexes = indexes;
            let checkIndexesСoincidence = 0;
            checkIndexes.sort();

            for(let t = 0; t < checkIndexes.length; t++) {
                if (checkIndexes[t] == checkIndexes[t + 1]) {
                    checkIndexesСoincidence++;
                }
            }

            if (!checkIndexesСoincidence) {
                triangles++;
                for(let k = 0; k < preferences.length; k++) {
                    if (indexes.indexOf(k) != -1) preferences[k] = 0;
                }
            }
        }
    }

    return triangles;
};
