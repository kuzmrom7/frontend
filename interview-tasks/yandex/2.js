function solution(firstName, lastName) {
	const Babge = function (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = ``;
		Object.defineProperty(this, 'fullName', {
			set: function (val) {
				let values = val.split(' ');
				if (values.length === 2) {
					this.firstName = values[1];
					this.lastName = values[0];
				}
			},
			get: function () {
				return `${this.lastName} ${this.firstName}`;
			}
		});
	}

	var badge = new Babge(firstName, lastName);

	return badge;
}

let s = solution("Roman", "Kuzmenko")
console.log(s.fullName)
