import React from "react";
import styles from "./balance.module.scss";

export const Balance = () => {
	return (
		<div className={styles.balance}>
			<div className={styles.title}>Баланс: </div>
			<div className={styles.value}> 272 ₽</div>
			<div className={styles.btn}></div>
		</div>
	);
};
