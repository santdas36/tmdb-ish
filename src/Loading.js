import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Loading.css";

function Loading() {
	return (
		<div className="loading">
			<HashLoader size={75} color={"#4ca1af"} />
		</div>
	)
}
export default Loading;