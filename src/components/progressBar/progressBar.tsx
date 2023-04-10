import React from "react";
import styles from "./progressBar.module.scss";

interface Iprops {
	type: "percent" | "piece";
	count: number;
	all: number;
	color: string;
	title: string;
}

export const ProgressBar = ({ all, count, color, title, type }: Iprops) => {
	const progress = ((count / all) * 100).toFixed(0);

	return (
		<div className={styles.progressBarWrapper}>
			<div className={styles.progressBarTitle}>
				<span>{title} </span>
				{type === "percent" ? (
					<span style={{ color: color }}>{progress}%</span>
				) : (
					<span style={{ color: color }}>{`${count} из  ${all} шт`}</span>
				)}
			</div>
			<div className={styles.progressBarLine}>
				<div
					style={{ width: progress + "%", backgroundColor: color }}
					className={styles.linePlaceHolder}
				></div>
			</div>
		</div>
	);
};
