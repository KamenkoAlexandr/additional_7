module.exports = function solveSudoku(matrix) {
    function solutionSudoku(matrix) {
        var indexes = [0,0], rowWithZero, columnWithZero;
        if(!findZero(matrix, indexes)) return true;
        rowWithZero = indexes[0];
        columnWithZero = indexes[1];

            for (var tryElement = 1; tryElement < 10; tryElement++) {
                if (checkRow(matrix, tryElement, rowWithZero) && checkColumn(matrix, tryElement, columnWithZero) && checkSquare(matrix, tryElement, rowWithZero, columnWithZero)) {
                    matrix[rowWithZero][columnWithZero] = tryElement;
                    if (solutionSudoku(matrix))
                    return true;
                    matrix[rowWithZero][columnWithZero] = 0;
                }
            }
        return false;
    }
    function checkRow(matrix, tryElement, indexOfRow) {
        for (var i = 0; i < 9; i++) {
            if (tryElement === matrix[indexOfRow][i]) return false;
        }
        return true;
    }
    function checkColumn(matrix, tryElement, indexOfColumn) {
        for (var i = 0; i < 9; i++) {
            if (tryElement === matrix[i][indexOfColumn]) return false;
        }
        return true;
    }
    function checkSquare(matrix, tryElement, indexOfRow, indexOfColumn) {
        for (var i = indexOfRow - indexOfRow%3; i < indexOfRow - indexOfRow%3 + 3; i++) {
            for (var j = indexOfColumn - indexOfColumn%3; j < indexOfColumn - indexOfColumn%3 + 3; j++) {
                if (tryElement === matrix[i][j]) return false;
            }
        }
        return true;
    }
    function findZero(matrix, indexes) {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    indexes[0] = i;
                    indexes[1] = j;
                    return true;
                }
            }
        }
        return false;
    }
    solutionSudoku(matrix);
    return matrix;
};
