import React from "react";

const Logo = () => {
	return (
		<div className="logo">
			{/* Les img importées depuis la balise IMG st accessibles ds "public" */}
			<img src="./logo192.png" alt="logo react" />
			<h3>Flags by react</h3>
		</div>
	);
};

export default Logo;
