import React from "react";
import styles from "./sortDropdown.module.scss";
import { useComponentVisible } from "lib/hooks/useComponentVisible";

export const SortDropdown = ({ props, currentItem, setCurrentItem }: any) => {
	const { isComponentVisible, setIsComponentVisible, ref } =
		useComponentVisible();

	const dropdownClickHandler = () => {
		setIsComponentVisible((prev) => !prev);
	};

	return (
		<div
			ref={ref}
			onClick={dropdownClickHandler}
			className={styles.sortDropdown}
		>
			<div
				className={`${styles.title} ${
					isComponentVisible ? styles.dropdownActive : ""
				}`}
			>
				<span
					className={currentItem !== props[0].title ? styles.isNotDefault : ""}
				>
					{currentItem}
				</span>
				<span className={`${styles.arrow} `}> </span>
			</div>
			{isComponentVisible && (
				<div className={styles.dropdown}>
					<ul>
						{props.map((item: any) => {
							return (
								<li key={item.title} onClick={() => setCurrentItem(item.title)}>
									{item.img ? <img src={item.img} alt="item.img" /> : ""}
									<span
										className={`${styles.dropdownItemTitle} ${
											// eslint-disable-next-line eqeqeq
											item.title == currentItem ? styles.dropdownItemActive : ""
										}`}
									>
										{item.title}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
