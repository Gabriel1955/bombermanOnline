
getColor = function (x, y) {
    return ctx.getImageData(x, y, 1, 1);
}
canMoveUp = function (current_x, current_y) {
    current_y -= 10; //up
    var p1 = getColor(current_x + 10, current_y+9);
    var p2 = getColor(current_x + 25, current_y+9);
    return checkPoints(p1.data, p2.data, [0, 0, 0, 0]);
}
canMoveDown = function (current_x, current_y) {
    current_y += 40; //up
    var p1 = getColor(current_x + 10, current_y);
    var p2 = getColor(current_x + 25, current_y);
    return checkPoints(p1.data, p2.data, [0, 0, 0, 0]);
}
canMoveReight = function (current_x, current_y) {
    current_x += 40; //up
    var p1 = getColor(current_x, current_y + 10);
    var p2 = getColor(current_x, current_y + 30);
    return checkPoints(p1.data, p2.data, [0, 0, 0, 0]);
}
canMoveLeft = function (current_x, current_y) {
    current_x -= 10; //up
    var p1 = getColor(current_x, current_y + 10);
    var p2 = getColor(current_x, current_y + 30);
    return checkPoints(p1.data, p2.data, [0, 0, 0, 0]);
}
checkPoints = function (p1, p2, array) {
    var result = true;
    for (i = 0; i < 3; i++) {
        result = (p1[i] == array[i] && p2[i] == array[i]);
    }
    return result;
}