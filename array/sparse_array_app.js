// 稀疏数组实战应用
// 1. 稀疏矩阵
class SparseMatrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = {};
        this.rowCount = 0;
        this.colCount = 0;
    }

    // 设置值
    set(row, col, value) {
        if (row >= this.rows || col >= this.cols) {
            throw new Error('索引超出范围');
        }
        const key = `${row},${col}`;
        if (value != 0) {
            this.data[key] = value;
            this.rowCount = Math.max(this.rowCount, row + 1);
            this.colCount = Math.max(this.colCount, col + 1);
        } else {
            delete this.data[key];
        }
    }

    // 获取值
    get(row, col) {
        const key = `${row},${col}`;
        return this.data[key] || 0;
    }

    // 矩阵加法
    add(other) {
        if (this.rows != other.rows || this.cols != other.cols) {
            throw new Error('矩阵维度不匹配');
        }
        const result = new SparseMatrix(this.rows, this.cols);

        // 合并两个矩阵的数据
        const allKeys = new Set([...Object.keys(this.data), ...Object.keys(other.data)]);

        for (const key of allKeys) {
            const [row, col] = key.split(',').map(Number);
            const sum = this.get(row, col) + other.get(row, col);
            if (sum != 0) {
                result.set(row, col, sum);
            }
        }
        return result;
    }

    // 矩阵乘法 简化版

    multiply(other) {
        if (this.cols != other.cols) {
            throw new Error('矩阵维度不匹配');
        }
        const result = new SparseMatrix(this.rows, other.cols);
        // 对于稀疏矩阵，只计算非零元素
        for (const key of Object.keys(this.data)) {
            const [row, col] = key.split(',').map(Number);
            const value = this.data[key];
            // 变量other矩阵中同一列的非零元素
            for (const otherKey of Object.keys(other.data)) {
                const [otherRow, otherCol] = otherKey.split(',').map(Number);
                if (col === otherRow) {
                    const cureent = result.get(row, otherCol);
                    result.set(row, otherCol, cureent + value * other.data[otherKey]);
                }
            }
        }
        return result;
    }

    // 获取非零元素数量
    getNonzeroCount() {
        return Object.keys(this.data).length;
    }

    // 或去稀疏度
    getSparsity() {
        const total = this.rows * this.cols;
        const nonZero = this.getNonzeroCount();
        return ((1 - (nonZero / total)).toFixed(2)) * 100 + '%';
    }

    // 转为密集矩阵
    toDense() {
        const matrix = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                row.push(this.get(i, j));
            }
            matrix.push(row);
        }
        return matrix;
    }

    // 打印
    print() {
        const dense = this.toDense();
        console.log('稀疏矩阵：');
        console.log('维度:', `${this.rows}x${this.cols}`);
        console.log('非零元素:', this.getNonzeroCount());
        console.log('稀疏度:', this.getSparsity());
        console.log('数据:');
        dense.forEach(row => console.log(row.join(' ')));
    }
}


// 使用示例

const matrix = new SparseMatrix(5, 5);
matrix.set(0, 0, 1);
matrix.set(0, 2, 2);
matrix.set(1, 1, 3);
matrix.set(2, 0, 4);
matrix.set(4, 4, 5);
matrix.print();
console.log(matrix.getNonzeroCount(), matrix.getSparsity());


// 场景2: 稀疏向量
class SparseVector {
    constructor(size) {
        this.size = size;
        this.data = {};
        this.norm = null;
    }

    // 设置值
    set(index, value) {
        if (index >= this.size) {
            throw new Error('索引超出范围');
        }
        if (value != 0) {
            this.data[index] = value;
        }
        else {
            delete this.data[index];
        }
        this.norm = null; // 重置范数缓存
    }

    // 获取值
    get(index) {
        return this.data[index] || 0;
    }

    // 向量加法
    add(other) {
        if (this.size !== other.size) {
            throw new Error('向量维度不匹配');
        }
        const result = new SparseVector(this.size);
        const allIndices = new Set([...Object.keys(this.data), ...Object.keys(other.data)]);
        for (const idx of allIndices) {
            const sum = this.get(idx) + other.get(idx);
            if (sum !== 0) {
                result.set(idx, sum);
            }
        }
        return result;
    }

    // 点积
    dot(other) {
        if (this.size !== other.size) {
            throw new Error('向量维度不匹配');
        }
        let result = 0;
        const smaller = Object.keys(this.data).length < Object.keys(other.data).length ? this.data : other.data;
        const larger = smaller === this.data ? other.data : this.data;
        for (const idx of Object.keys(smaller)) {
            if (larger[idx] !== undefined) {
                result += smaller[idx] * larger[idx];
            }
        }
        return result;
    }

    // 计算范数
    getNorm() {
        if (this.norm === null) {
            let sum = 0;
            for (const value of Object.values(this.data)) {
                sum += value * value;
            }
            this.norm = Math.sqrt(sum);
        }
        return this.norm;
    }

    // 余弦相似度
    cosineSimilarity(other) {
        const dot = this.dot(other);
        const norm1 = this.getNorm();
        const norm2 = other.getNorm();
        if (norm1 === 0 || norm2 === 0) return 0;
        return dot / (norm1 * norm2);
    }

    // 转为密集向量
    toDense() {
        const vector = new Array(this.size).fill(0);
        for (const [idx, value] of Object.entries(this.data)) {
            vector[parseInt(idx)] = value;
        }
        return vector;
    }

    // 获取非零元素数量
    getNonZeroCount() {
        return Object.keys(this.data).length;
    }

    // 打印

    print() {
        console.log('稀疏向量：');
        console.log(`维度：${this.size}`);
        console.log(`非零元素：${this.getNonZeroCount()}`);
        console.log(`稀疏度：${(this.getNonZeroCount() / this.size * 100).toFixed(2)}%`);
        console.log('数据：', this.data);
    }


}

// 使用示例

const v1 = new SparseVector(10);
v1.set(0, 1);
v1.set(2, 2);
v1.set(5, 3);

const v2 = new SparseVector(10);
v2.set(2, 1);
v2.set(5, 2);
v2.set(8, 4);

console.log('向量v1：', v1.toDense());
console.log('向量v2:', v2.toDense());

console.log('点积:', v1.dot(v2));
console.log('余弦相似度:', v1.cosineSimilarity(v2));
console.log('v1范数:', v1.getNorm(), '非零元素数量:', v1.getNonZeroCount());


// 场景3: 期盼游戏(稀疏棋盘)

class SparseChessBoard {
    constructor(size = 8) {
        this.size = size;
        this.pieces = {};
        this.moveHistory = [];
    }

    // 放置棋子
    placePiece(row, col, piece) {
        if (row >= this.size || col >= this.size) {
            throw new Error('位置超出棋盘');
        }
        const key = `${row},${col}`;
        this.pieces[key] = piece;
        this.moveHistory.push({ type: 'place', row, col, piece });
        console.log(`放置 ${piece} 在 (${row}, ${col})`);
    }

    // 移除棋子
    removePiece(row, col) {
        const key = `${row},${col}`;
        const piece = this.pieces[key];
        if (piece) {
            delete this.pieces[key];
            this.moveHistory.push({ type: 'remove', row, col, piece });
            console.log(`移除 ${piece} 从 (${row},${col})`);
        }
    }

    // 移动棋子
    movePiece(fromRow, fromCol, toRow, toCol) {
        const fromKey = `${fromRow},${fromCol}`;
        const piece = this.pieces[fromKey];
        if (!piece) {
            throw new Error('起始位置没有棋子');
        }
        if (toRow >= this.size || toCol >= this.size) {
            throw new Error('目标位置超出棋盘');
        }
        // 检查目标位置是否有棋子(吃子)
        const toKey = `${toRow},${toCol}`;
        const captured = this.pieces[toKey];
        this.pieces[toKey] = piece;
        delete this.pieces[fromKey];
        this.moveHistory.push({
            type: 'move',
            fromRow,
            fromCol,
            toRow,
            toCol,
            piece,
            captured
        });
        console.log(`移动 ${piece} 从 (${fromRow},${fromCol}) 到 (${toRow},${toCol})`);
        if (captured) {
            console.log(`吃子: ${captured}`);
        }
    }

    // 获取指定位置的棋子

    getPiece(row, col) {
        const key = `${row},${col}`;
        return this.pieces[key] || null;
    }

    // 获取所有棋子
    getAllPieces() {
        return [...this.pieces];
    }

    // 获取指定类型的棋子位置
    getPiecesByType(pieceType) {
        const positions = [];
        for (const [key, piece] of Object.entries(this.pieces)) {
            if (piece === pieceType) {
                const [row, col] = key.split(',').map(Number);
                positions.push({ row, col });
            }
        }
        return positions;
    }

    // 打印棋盘(稀疏试图)
    print() {
        const board = [];
        for (let i = 0; i < this.size; i++) {
            const row = [];
            for (let j = 0; j < this.size; j++) {
                const key = `${i},${j}`;
                row.push(this.pieces[key] || '.');
            }
            board.push(row.join(' '));
        }
        console.log('棋盘：');
        console.log(board.join('\n'));
        console.log(`棋子总数：${Object.keys(this.pieces).length}`);
    }

    // 获得棋盘稀疏度
    getSparsity() {
        const total = this.size * this.size;
        const occupied = Object.keys(this.pieces).length;
        return (total - occupied) / total;
    }

    // 撤销上一步操作
    undo() {
        if (this.moveHistory.length == 0) {
            console.log('没有操作可以撤销');
            return;
        }
        const lastMove = this.moveHistory.pop();
        console.log('撤销: ', lastMove);
        switch (lastMove.type) {
            case 'place':
                delete this.pieces[`${lastMove.row},${lastMove.col}`];
                break;
            case 'remove':
                this.pieces[`${lastMove.row},${lastMove.col}`] = lastMove;
                break;
            case 'move':
                // 恢复起始位置
                this.pieces[`${lastMove.fromRow},${lastMove.fromCol}`] = lastMove.piece;
                // 恢复目标位置
                if (lastMove.captured) {
                    this.pieces[`${lastMove.toRow},${lastMove.toCol}`] = lastMove.captured;
                } else {
                    delete this.pieces[`${lastMove.toRow},${lastMove.toCol}`];
                }
                break;
        }
    }
}

// 使用示例
const board = new SparseChessBoard(8);
board.placePiece(0, 0, '♜');
board.placePiece(0, 7, '♜');
board.placePiece(7, 0, '♜');
board.placePiece(7, 7, '♜');
board.placePiece(1, 0, '♟');
board.placePiece(1, 1, '♟');
board.placePiece(1, 2, '♟');
board.print();

// 移动棋子
board.movePiece(1, 0, 2, 0);
board.print();
console.log('♟ 位置', board.getPiecesByType('♟'));
console.log('稀疏度:', board.getSparsity());

// 撤销
board.undo();
board.print();

// 场景4: 稀疏数组的序列化

class SparseArraySerializer {

    // 序列化稀疏数组(只存储有值的元素)
    static serialize(arr) {
        if (!Array.isArray(arr)) {
            throw new Error('参数必须是数组');
        }
        const result = {
            length: arr.length,
            data: {}
        };
        for (let i = 0; i < arr.length; i++) {
            if (arr.hasOwnProperty(i)) {
                result.data[i] = arr[i];
            }
        }
        return JSON.stringify(result);
    }

    // 反序列化
    static deserialize(json) {
        const { length, data } = JSON.parse(json);
        const arr = new Array(length);
        for (const [idx, value] of Object.entries(data)) {
            arr[parseInt(idx)] = value;
        }
        return arr;
    }

    // 压缩序列化(更紧凑)
    static compactSerialize(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError('参数必须是数组');
        }
        const indices = [];
        const values = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr.hasOwnProperty(i)) {
                indices.push(i);
                values.push(arr[i]);
            }
        }
        return JSON.stringify({
            l: arr.length,
            i: indices,
            v: values
        });
    }

    static compactDeserialize(json) {
        const { l, i, v } = JSON.parse(json);
        const arr = new Array(l);
        for (let j = 0; j < i.length; j++) {
            arr[i[j]] = v[j];
        }
        return arr;
    }
}

// 使用示例
const original = [1, , 3, , 5];
console.log('原始数组:', original);
const serialized = SparseArraySerializer.serialize(original);
console.log('序列化：', serialized);
const deserialized = SparseArraySerializer.deserialize(serialized);
console.log('反序列化:', deserialized);

const compact = SparseArraySerializer.compactSerialize(original);
console.log('紧凑序列化:', compact);

const uncompact = SparseArraySerializer.compactDeserialize(compact);
console.log('紧凑反序列化:', uncompact);
// 内存对比
const jsonSize = serialized.length;
const compactSize = compact.length;
console.log(`JSON 大小: ${jsonSize} bytes`);
console.log(`紧凑JSON大小: ${compactSize} bytes`);
console.log(`节省: ${((1 - compactSize / jsonSize) * 100).toFixed(2)}%`);
