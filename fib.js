let x, y, z;

while (1) {
    x = 0;
    y = 1;
    do {
        console.log("\n" + x);
        z = x + y;
        x = y;
        y = z;
    } while (x < 255);
    if (x > 233) {
        break;
    }
}