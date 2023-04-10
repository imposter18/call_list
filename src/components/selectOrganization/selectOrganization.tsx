import React, { useState } from "react";
import styles from "./selectOrganization.module.scss";
import { useComponentVisible } from "lib/hooks/useComponentVisible";

const organizationList = [
	{
		title: "Все  организации",
	},
	{
		title: "ООО Грузчиков Сервис Запад",
	},
	{
		title: "ИП Митрофанов М.М.",
	},
	{
		title: "ИП Иванов М.М.",
	},
	{
		title: "ИП Сидорова Александра Михайловна",
	},
];

export const SelectOrganization = () => {
	const [currentOrg, setCurrentOrg] = useState(organizationList[0].title);
	const { isComponentVisible, setIsComponentVisible, ref } =
		useComponentVisible();

	const dropdownClickHandler = () => {
		setIsComponentVisible((prev) => !prev);
	};

	return (
		<div
			ref={ref}
			onClick={dropdownClickHandler}
			className={styles.selectOrganization}
		>
			<div
				className={`${styles.title} ${
					isComponentVisible ? styles.dropdownActive : ""
				}`}
			>
				<span>{currentOrg}</span>
			</div>
			{isComponentVisible && (
				<div className={styles.dropdown}>
					<ul>
						{organizationList.map((org) => {
							return (
								<li key={org.title} onClick={() => setCurrentOrg(org.title)}>
									<span className={styles.dropdownItemTitle}>{org.title}</span>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
