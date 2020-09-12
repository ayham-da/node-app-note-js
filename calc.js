const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1);
const ops = require('./calcinport');

if(operation == "Sum"){
    console.log(ops.Sum(numbers))
}else if(operation == "Avg") {
    console.log(ops.Avg(numbers))
} else {
    console.log('I cannot calculate that, please type either "Sum" (to calculate the Sum) or "Avg" (To calculate the Average)')
}
