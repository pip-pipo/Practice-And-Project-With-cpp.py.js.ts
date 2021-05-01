// interface pointType {
//     roll: number,
//     name: string,
//     registration:number
// }
// var point2D : pointType = {roll:3,name:"morsalin",registration:34343}
// function takePoint(point:pointType){
//     console.log(point)
//     if(typeof(point)){
//     }
// }
// takePoint(point2D)
// takePoint({roll:4,name:"salin",registration:455})
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(3, 4);
var p3 = new Point(4, 5);
var p4 = p1.add(p3);
console.log(p4);
console.log(p1);
var list = [
    {
        id: 'morsalin',
        display: "xxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        id: 'morsalin2',
        display: "xxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        id: 'morsalin3',
        display: "xxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        id: 'morsalin4',
        display: "xxxxxxxxxxxxxxxxxxxxxxx"
    },
];
function takeData(listOfData) {
    console.log(listOfData);
    var getmorsalin4 = listOfData.map(function (i) {
        return i.id.indexOf('morsalin3');
    });
    console.log(getmorsalin4);
    return console.log(listOfData.map(function (i) { return Math.max(i.display.length); }));
}
takeData(list);
