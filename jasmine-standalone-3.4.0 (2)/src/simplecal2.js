class calculator
{
	constructor()
	{	this.lastAns = 0;
		this.arr = [];
	}

	add(...args)
	{	let i = 0;
		let sum = 0;

		while (i <= args.length - 1)
		{
			if (args[i] === "LAST"){
				args[i] = this.lastAns;
			}
			sum = sum + args[i];
			this.lastAns = sum;
			i++;
		}
		return sum;
	}

	last()
	{	return this.lastAns;
	}

	multiply(...args)
	{	let i = 0;
		let product = 1;

		while (i <= args.length - 1)
		{	if (args[i] === "LAST"){
				args[i] = this.lastAns;
			}
			product *= args[i];
			i++;
		}
		return product;
	}

	set_slot(x){
		this.arr.push(this.lastAns);
		return this.arr[x - 1];
	}
	get_slot(x){
		return this.arr[x - 1];
	}
}
let calInstance = new calculator();

console.log(calInstance.add(5, 3));
console.log(calInstance.multiply(calInstance.last(),3,1));
console.log(calInstance.last());
console.log(calInstance.set_slot(1));
console.log(calInstance.get_slot(1))
console.log(calInstance.multiply(calInstance.last(),2));
console.log(calInstance.set_slot(1));
console.log(calInstance.get_slot(1))

