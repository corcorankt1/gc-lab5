var items = [
	{
		name: "milk",
		price: 3.00
	},
	{
		name: "bread",
		price: 2.50
	},
	{
		name: "eggs",
		price: 1.25
	},
	{
		name: "ice cream",
		price: 5.00
	},
]

var total = 0;


items.forEach(function(element){
	console.log(element.name + " $"  + element.price.toFixed(2));
	total += element.price;
});

console.log("Total: $" + total.toFixed(2));