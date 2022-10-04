export const foodData = [
	{
		name: 'Pastel De Nata',
		price: '1.0 EUR',
		image:
			'https://images.unsplash.com/photo-1562044840-a9bf4731635b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80',
		quantity: null,
		clicked: function (event) {
			document.getElementById(event.currentTarget.id).style.backgroundColor ===
			'white'
				? (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'aquamarine')
				: (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'white');
		},
	},
	{
		name: '200 ml Cervesa',
		price: `1.0 EUR`,
		image:
			'https://media.recheio.pt/catalogo/media/catalog/product/cache/2/image/900x900/9df78eab33525d08d6e5fb8d27136e95/5/8/589204_1.jpg',
		quantity: null,
		clicked: function (event) {
			document.getElementById(event.currentTarget.id).style.backgroundColor ===
			'white'
				? (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'aquamarine')
				: (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'white');
		},
	},
	{
		name: 'Ham & Cheese Toast',
		price: `4.0 EUR`,
		image:
			'https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/product/Main/3760_HamCheeseToastie.png',
		quantity: null,
		clicked: function (event) {
			document.getElementById(event.currentTarget.id).style.backgroundColor ===
			'white'
				? (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'aquamarine')
				: (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'white');
		},
	},
	{
		name: '500 ml Coca Cola',
		price: `2.0 EUR`,
		image:
			'https://grocerybazaar.pk/wp-content/uploads/2020/04/1029349-1a-900x900.jpg',
		quantity: null,
		clicked: function (event) {
			document.getElementById(event.currentTarget.id).style.backgroundColor ===
			'white'
				? (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'aquamarine')
				: (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'white');
		},
	},
	{
		name: 'Polvo à Lagareiro',
		price: `9.5 EUR`,
		image:
			'https://comunidadeslusofonas.pt/wp-content/uploads/2021/04/Polvo-a-Lagareiro.jpg',
		quantity: null,
		clicked: function (event) {
			document.getElementById(event.currentTarget.id).style.backgroundColor ===
			'white'
				? (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'aquamarine')
				: (document.getElementById(
						event.currentTarget.id
				  ).style.backgroundColor = 'white');
		},
	},
];
