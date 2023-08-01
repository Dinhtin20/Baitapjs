// Bai1: Tinh tien luong cho nhan vien

// B1: khai báo

var luong1ngay = 100000;
var ngaylam = 26;
var tong;

// B2: xử lí bài toán 

tong = luong1ngay * ngaylam

// B3: kết quả

console.log('tong', tong);

// Bai2: Tính giá trị trung bình

// B1: Khai báo

var number1 = 1;
var number2 = 2;
var number3 = 3;
var number4 = 4;
var number5 = 5;
var total

// B2: xử lí

total = (number1+number2+number3+number4+number5) / 5;

// B3: Kết quả

console.log('total', total);

// Bai3: Quy đổi tiền

// B1: khai báo

var VND;
var money;
const USD = 23500;
VND = 2;

// B2: xử lí

money = USD * VND;

// B3: Kết quả

console.log('money', money);

// Bai4: Tính diện tích chu vi hình chữ nhật 

// B1: khai báo

var dai,rong,perimeter,acr;
rong = 2;
dai = 4;

// B2: xử lí

perimeter = (dai+rong)*2;
acr = dai * rong;

// B3: Kết quả

console.log('perimeter', perimeter);
console.log('acr', acr);

// Bai5: Tính tổng 2 ký số

// B1: khai báo

var num,ten,unit;
num = 12;

// B2: xử lí

ten = num / 10;
unit = num % 10;
ten=Math.floor(ten);
total = ten + unit;

// B3: Kết quả

console.log('ten + unit = ', total);
