//we can use GLOBAL process object here which has an argv property
//global function Number convert string to Number

var sum = 0;

var length=(process.argv).length;

for(var i=2;i<length;i++){
	sum=sum+Number(process.argv[i]);
}

console.log(sum);
