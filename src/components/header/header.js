import "./header.css";

export const Header = () => {
	return (
		<div className="d-flex thead">
			<button type="button" className="hbutton">
				<i className="bi bi-list h5 menu-icon"></i>
			</button>
			<h4 className="m-0">TODO</h4>
		</div>
	);
};

export default Header;