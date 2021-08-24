/*
 * @Author: your name
 * @Date: 2021-08-01 13:27:17
 * @LastEditTime: 2021-08-01 17:40:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\12常见算法\algorithm.js
 */
/**
 * 快速排序
 */
console.log("************快速排序**********");
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
console.log(quickSort([56, 85, 12, 74, 36, 56, 30, 85]));
/**
 * 双指针 合并两个升序数组 - > 一个升序数组
 */
console.log("************双指针合并升序数组**********");

(function mergeSortedArray(A, B) {
    let result = [];
    let aPointer = 0;
    let bPointer = 0;
    for (let i = 0; i < A.length + B.length; i++) {
        if (A[aPointer] <= B[bPointer] && aPointer < A.length) {
            result.push(A[aPointer]);
            console.log('将A第' + aPointer + '个插入');
            aPointer++;
        }
        else if (bPointer < B.length) {
            result.push(B[bPointer]);
            console.log('将B第' + bPointer + '个插入');
            bPointer++;
        }
        else {
            result.push(A[aPointer]);
            console.log('将A第' + aPointer + '个插入');
            aPointer++;
        }
    }
    console.log(result);
})([11, 15, 18, 20, 23], [1, 5, 8, 9, 10])
/**
 * 冒泡排序
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}