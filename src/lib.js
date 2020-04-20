//exportする関数や、classを記述する。
//https://qiita.com/senou/items/a2f7a0f717d8aadabbf7

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

// import { square, diag } from 'lib'; //libからsquareとdiagというモジュールをインポートする
// console.log(square(11));
// console.log(diag(4, 3));