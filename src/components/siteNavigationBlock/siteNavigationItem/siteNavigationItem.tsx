import React from "react";
import styles from "./siteNavigationItem.module.scss";
interface Iprops {
	menuItem: {
		name: string;
		logo: any;
	};
}

export const SiteNavigationItem = ({ menuItem }: Iprops) => {
	const { logo, name } = menuItem;
	return (
		<div className={styles.navigationItem}>
			<span className={styles.logoWrapper}>
				<img src={logo} />
			</span>

			<span className={styles.title}>{name}</span>
		</div>
	);
};
