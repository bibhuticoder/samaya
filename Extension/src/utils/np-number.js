module.exports.toNpNumber = (number) => {
    if (!number) return null;
    let dict = {
        0: '०',
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
    };
    let strNum = number + '';
    return strNum.split('').map(n => dict[n] || n ).join('');
}
