function Sum(numArray) {
    return numArray.reduce((Sum, num) => {
        const curNum = parseInt(num)
        if(isNaN(curNum)) {
            console.log(`Sorry, the argument "${num}" is not a number, please try again`)
            process.exit()
        }
        return Sum + curNum
    }, 0)
}
function Avg(numArray) {
    return Sum(numArray) / numArray.length
}
module.exports ={ Sum,Avg }
