import React from "react";
import styles from "./userInfo.module.scss";
import userAvatar from "../../assets/img/avatars/user.png";
import workerAvatar from "../../assets/img/avatars/worker.png";
import { useComponentVisible } from "lib/hooks/useComponentVisible";
import phoneIcon from "../../assets/img/any/phoneicon.svg";
import emailIcon from "../../assets/img/any/emailIcon.svg";

const userData = {
	avatar: userAvatar,
	name: "Упоров Кирилл",
	role: "Директор",
	sity: "Санкт-Петербург",
	phone: "8 (800) 333-17-21",
	email: "hi@skilla.ru",
	operators: [
		{
			avatar: workerAvatar,
			name: "Мирон Батонов",
		},
		{
			avatar: workerAvatar,
			name: "Алексей Ильин",
		},
		{
			avatar: workerAvatar,
			name: "Милана Константинопольская",
		},
	],
	logisticians: [
		{
			avatar: workerAvatar,
			name: "Александра Сизых",
		},
		{
			avatar: workerAvatar,
			name: "Илья Алексеев",
		},
		{
			avatar: workerAvatar,
			name: "Владимир Петров",
		},
	],
	bookkeeper: [
		{
			avatar: workerAvatar,
			name: "Полина Калинина",
		},
		{
			avatar: workerAvatar,
			name: "Наталья Натальева",
		},
		{
			avatar: workerAvatar,
			name: "Константин Константинопольский",
		},
	],
};

export const UserInfo = () => {
	const { isComponentVisible, setIsComponentVisible, ref } =
		useComponentVisible();

	const dropdownClickHandler = () => {
		setIsComponentVisible((prev) => !prev);
	};
	return (
		<div ref={ref} className={styles.userInfoWrapper}>
			<div
				onClick={dropdownClickHandler}
				className={`${styles.userAvatar} ${
					isComponentVisible ? styles.activePopup : ""
				}`}
			>
				<img src={userData.avatar} alt="userAvatar" />
				<span></span>
			</div>
			{isComponentVisible && (
				<div className={styles.dropdown}>
					<div className={styles.topBlock}>
						<div className={styles.dropTitle}>
							<span className={styles.name}>{userData.name}</span>
							<a href="/#" className={styles.logout}>
								{" "}
							</a>
						</div>
						<div className={styles.dropinfo}>
							<span>{userData.role}</span>
							<span className={styles.dot}>.</span>
							<span>{userData.sity}</span>
						</div>
						<div className={styles.contacts}>
							<div className={styles.phone}>
								<img src={phoneIcon} alt="phoneIcon" />
								<span>{userData.phone}</span>
							</div>
							<div className={styles.email}>
								<img src={emailIcon} alt="emailIcon" />
								<span>{userData.email}</span>
							</div>
						</div>
					</div>
					<div className={styles.bottomBlock}>
						<div className={styles.workersGrup}>
							<div className={styles.workersGrupTitle}>Операторы</div>
							<ul>
								{userData.operators.map((worker) => {
									return (
										<li key={worker.name}>
											<img src={worker.avatar} alt="avatar" />
											<span>{worker.name}</span>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.workersGrup}>
							<div className={styles.workersGrupTitle}>Логисты</div>
							<ul>
								{userData.logisticians.map((worker) => {
									return (
										<li key={worker.name}>
											<img src={worker.avatar} alt="avatar" />
											<span>{worker.name}</span>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.workersGrup}>
							<div className={styles.workersGrupTitle}>Бухгалтеры</div>
							<ul>
								{userData.bookkeeper.map((worker) => {
									return (
										<li key={worker.name}>
											<img src={worker.avatar} alt="avatar" />
											<span>{worker.name}</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
