import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Loading.css";

function Loading({loading}) {
	return (
		<div className="loading">
			<HashLoader size={150} color={#2c3e50} loading={loading} />
		</div>
	)
}
export default Loading;