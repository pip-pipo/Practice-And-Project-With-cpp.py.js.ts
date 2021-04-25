var user = {
    name: "morsalin",
    id: 3434
};
console.log(user);
var MakeToggle = /** @class */ (function () {
    function MakeToggle(isToggle, htmlElement) {
        this.isToggle = isToggle;
        this.htmlElement = htmlElement;
    }
    MakeToggle.prototype.MakeToggle = function (htmlElement, isToggle) {
        if (htmlElement) {
            if (isToggle)
                return false;
            else
                return true;
        }
    };
    return MakeToggle;
}());
var users = new MakeToggle(true, "sting");
console.log(users.MakeToggle("morsalin", false));
console.log();
var foo = "morsalin";
console.log(typeof foo);
if (typeof foo === "number")
    console.log("foo is a number");
var mains = ['morsalin', 'foo'];
function logPoint(p) {
    return p.x + p.y;
}
console.log(logPoint({ x: 34, y: 45 }));
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
