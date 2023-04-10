import React from "react";
import styles from "./header.module.scss";
import moment from "moment";
import "moment/locale/ru";
import { ProgressBar } from "components/progressBar/progressBar";
import searchIcon from "../../assets/img/any/searchIcon.svg";
import { SelectOrganization } from "components/selectOrganization/selectOrganization";
import { UserInfo } from "components/userInfo/userInfo";

export const Header = () => {
	const getDate = () => {
		moment.locale("ru");
		const date = moment().format("dddd, D  MMM");
		return date[0].toUpperCase() + date.slice(1);
	};
	return (
		<header className={styles.header}>
			<div className={styles.date}>{getDate()}</div>
			<div className={styles.callsAnalytics}>
				<ProgressBar
					all={30}
					count={20}
					title={"Новые звонки"}
					type={"piece"}
					color={"#28A879"}
				></ProgressBar>
				<ProgressBar
					all={100}
					count={40}
					title={"Качество разговоров"}
					type={"percent"}
					color={"#FFD500"}
				></ProgressBar>
				<ProgressBar
					all={30}
					count={20}
					title={"Конверсия в заказ"}
					type={"percent"}
					color={"#EA1A4F"}
				></ProgressBar>
			</div>
			<div className={styles.search}>
				<img src={searchIcon} alt="searchIcon" />
			</div>
			<div className={styles.selectOrganization}>
				<SelectOrganization></SelectOrganization>
			</div>
			<div>
				<UserInfo></UserInfo>
			</div>
		</header>
	);
};
