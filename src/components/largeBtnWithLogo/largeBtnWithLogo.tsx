import React from "react";
import styles from "./largeBtnWithLogo.module.scss";

interface Iprops {
	title: string;
	logo: any;
	style: string;
}

export const LargeBtnWithLogo = ({ logo, title, style }: Iprops) => {
	return (
		<>
			<button className={`${styles.btn} ${style}`}>
				<span className={styles.titleBtn}>{title}</span>
				<div className={styles.logo}>
					<img src={logo} alt="btn logo" />
				</div>
			</button>
		</>
	);
};
