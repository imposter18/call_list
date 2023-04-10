import React from "react";
import mainLogo from "../../assets/img/MainLogo/mainLogo.svg";
import styles from "./mainLogo.module.scss";

export const MainLogo = () => {
	return (
		<div className={styles.mainLogo}>
			<img src={mainLogo} alt="Skilla logo" />
		</div>
	);
};
