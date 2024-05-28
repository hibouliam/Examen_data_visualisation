function twoSum(array, target) {
    const numIndices = {};
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        numIndices[array[i]] = i;
    }
    return null; //même si on suppose qu'il y a exactement une solution pour chaque entrée
}

const input = [3,3,4,2];
const target = 6;
const result = twoSum(input, target);
console.log(result);

