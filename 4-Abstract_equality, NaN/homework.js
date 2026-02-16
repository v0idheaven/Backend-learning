// function checkDirection(val) {
    // val will be always a number, and val won't be NaN
    // tell us whether val is a negative value or a positive value
    // if val is negative return 'left' otherwise if val is positive return 'right'
// }

function checkDirection(val) {
    if (val < 0) {
        return 'left';
    } else if (val > 0) {
        return 'right';
    }
}

checkDirection(-10) // 'left'
checkDirection(5)   // 'right'