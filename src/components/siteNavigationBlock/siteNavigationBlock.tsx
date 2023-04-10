import React from "react";
import { navigationItems } from "./navigationItems";
import { SiteNavigationItem } from "./siteNavigationItem/siteNavigationItem";
import styles from "./siteNavigationBlock.module.scss";

export const SiteNavigationBlock = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navigationItems.map((menuItem) => {
					return (
						<li
							key={menuItem.name}
							className={
								menuItem.name === "Звонки" ? styles.active : styles.notActive
							}
						>
							<SiteNavigationItem menuItem={menuItem}></SiteNavigationItem>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
