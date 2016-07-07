
export default class List {
  constructor(items){
    this.items = items;
  }

	min(){
		return Math.min.apply(null, this.items);
	}

	max(){
		return Math.max.apply(null, this.items);
	}

	average(){
		return this.items.length ? this.sum() / this.items.length : 0;
	}

	sum(){
		var result = 0, l = this.length;
		if (l) while (l--){
			if (this[l] != null) result += parseFloat(this[l]);
		}
		return result;
  }
}
