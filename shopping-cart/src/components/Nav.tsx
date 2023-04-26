type NavProps = {
	viewCart: boolean;
	setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: NavProps) => {
	return (
		<nav className='nav'>
			{viewCart ? (
				<button onClick={() => setViewCart(false)}>
					View Products
				</button>
			) : (
				<button onClick={() => setViewCart(true)}>View Cart</button>
			)}
		</nav>
	);
};

export default Nav;
