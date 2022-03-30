import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
	const [data, setData] = useState([]);
	// Le useEffect se joue qd le composant est monté
	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
	}, []);

	return (
		<div className="countries">
			<h1>Countries</h1>
			<ul>
				{data.map((country, index) => (
					<Card />
				))}
			</ul>
		</div>
	);
};

export default Countries;
