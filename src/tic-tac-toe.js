class TicTacToe {
    constructor() {
        this.playingField = [
            null, null, null,
            null, null, null,
            null, null, null
        ];

        this.currentPlayerSymbol = 'x';
    };

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    };

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex === 0) {
            if (columnIndex === 0 && this.playingField[0] === null) {
                this.playingField[0] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 1 && this.playingField[1] === null) {
                this.playingField[1] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 2 && this.playingField[2] === null) {
                this.playingField[2] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            };
        } else if (rowIndex === 1) {
            if (columnIndex === 0 && this.playingField[3] === null) {
                this.playingField[3] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 1 && this.playingField[4] === null) {
                this.playingField[4] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 2 && this.playingField[5] === null) {
                this.playingField[5] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            };
        } else if (rowIndex === 2) {
            if (columnIndex === 0 && this.playingField[6] === null) {
                this.playingField[6] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 1 && this.playingField[7] === null) {
                this.playingField[7] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            } else if (columnIndex === 2 && this.playingField[8] === null) {
                this.playingField[8] = this.currentPlayerSymbol;

                this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
            };
        };
    };

    isFinished() {
        if (this.getWinner()) {
            return true;
        } else if (this.isDraw()) {
            return true;
        } else {
            return false;
        };
    };

    getWinner() {
        if (this.playingField[0] === this.playingField[1] && this.playingField[1] === this.playingField[2]) {
            return this.playingField[0];
        } else if (this.playingField[3] === this.playingField[4] && this.playingField[4] === this.playingField[5]) {
            return this.playingField[3];
        } else if (this.playingField[6] === this.playingField[7] && this.playingField[7] === this.playingField[8]) {
            return this.playingField[6];
        } else if (this.playingField[0] === this.playingField[3] && this.playingField[3] === this.playingField[6]) {
            return this.playingField[0];
        } else if (this.playingField[1] === this.playingField[4] && this.playingField[4] === this.playingField[7]) {
            return this.playingField[1];
        } else if (this.playingField[2] === this.playingField[5] && this.playingField[5] === this.playingField[8]) {
            return this.playingField[2];
        } else if (this.playingField[0] === this.playingField[4] && this.playingField[4] === this.playingField[8]) {
            return this.playingField[0];
        } else if (this.playingField[2] === this.playingField[4] && this.playingField[4] === this.playingField[6]) {
            return this.playingField[2];
        } else {
            return null;
        };
    };

    noMoreTurns() {
        let counter = 0;

        for (let i = 0; i < this.playingField.length; i++) {
            if (this.playingField[i] !== null) {
                counter++;
            };
        };

        if (counter === 9) {
            return true;
        };

        return false;
    };

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        };

        return false;
    };

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex === 0) {
            if (colIndex === 0) {
                return this.playingField[0];
            } else if (colIndex === 1) {
                return this.playingField[1];
            } else if (colIndex === 2) {
                return this.playingField[2];
            };
        } else if (rowIndex === 1) {
            if (colIndex === 0) {
                return this.playingField[3];
            } else if (colIndex === 1) {
                return this.playingField[4];
            } else if (colIndex === 2) {
                return this.playingField[5];
            };
        } else if (rowIndex === 2) {
            if (colIndex === 0) {
                return this.playingField[6];
            } else if (colIndex === 1) {
                return this.playingField[7];
            } else if (colIndex === 2) {
                return this.playingField[8];
            };
        };
    };
};

module.exports = TicTacToe;