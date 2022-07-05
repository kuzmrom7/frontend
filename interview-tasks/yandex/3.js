function sum(x, y) {
	return x + y;
}

function double(x) {
	return sum(x, x);
}

function minus(x, y) {
	return x - y;
}

function addOne(x) {
	return sum(x, 1);
}

double(sum(2, 3)); // 10


function chain(fns) {
	const Chain = function () {
		this.value;
	}

	Chain.prototype.execute = function () {
		return this.value;
	}

	for (let i = 0; i < Object.keys(fns).length; i++) {
		let key = Object.keys(fns)[i];

		if (!Chain.hasOwnProperty(key)) {
			Chain.prototype[key] = function () {
				let args = arguments.length === 0 ? [this.value] : arguments;

				if (this.value) {
					args = args.length > 0 ? [this.value, ...args] : args
					this.value = fns[key](...args);
				} else {
					this.value = fns[key](...args);
				}
				return this;
			};
		}
	}

	return new Chain();
}

let c = chain({ sum: sum, minus: minus, double: double, addOne: addOne });

// console.log(c
// 	.sum(1, 2)
// 	.execute()
// 	.double()
// )

console.log(c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute());

// var c1 = c.sum(1, 2);
// c1.execute(); // == fns.sum(1, 2) == 3
// c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
// c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
// c1.execute(); // == fns.sum(1, 2) == 3
//
// var c2 = c1.sum(5);
// c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
// c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
// c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8
//
// c1.execute(); // == fns.sum(1, 2) == 3
