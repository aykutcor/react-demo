const options = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		leftIcon: 'ion-android-mail',
	},
	{
		key: 'test',
		label: 'Test',
		leftIcon: 'ion-chatbubbles',
	},
    {
		key: 'ecommerce',
		label: 'sidebar.ecommerce',
		leftIcon: 'ion-bag',
		children: [
			{
				key: 'shop',
				label: 'sidebar.shop',
			},
			{
				key: 'cart',
				label: 'sidebar.cart',
			},
			{
				key: 'checkout',
				label: 'sidebar.checkout',
			},
			{
				key: 'card',
				label: 'sidebar.cards',
			},
		],
	},
]
export default options;