import { Header } from "components/header/header";
import { LeftBlock } from "components/leftBlock/leftBlock";
import React, { useEffect, useState } from "react";
import styles from "./mainPage.module.scss";
import { CallList } from "components/callList/callList";
import { Balance } from "components/balance/balance";
import { DatePicker } from "components/datePicker/datePicker";
import { SortDropdown } from "components/sortDropdown/sortDropdown";
import avatar from "../../assets/img/avatars/avatar.png";
import searchicon from "../../assets/img/any/searchIcon.svg";

export const MainPage = () => {
	const [reset, setReset] = useState(false);
	const [typeCall, setTypeCall] = useState(typesCallData[0].title);
	const [workers, setWorkers] = useState(workersData[0].title);
	const [callFrom, setCallFrom] = useState(callFromData[0].title);
	const [source, setSource] = useState(sourceData[0].title);
	const [rating, setRating] = useState(ratingData[0].title);
	const [arrors, setArrors] = useState(arrorsData[0].title);

	useEffect(() => {
		if (typeCall !== typesCallData[0].title) {
			setReset(true);
		} else if (workers !== workersData[0].title) {
			setReset(true);
		} else if (callFrom !== callFromData[0].title) {
			setReset(true);
		} else if (source !== sourceData[0].title) {
			setReset(true);
		} else if (rating !== ratingData[0].title) {
			setReset(true);
		} else if (arrors !== arrorsData[0].title) {
			setReset(true);
		} else {
			setReset(false);
		}
	}, [arrors, callFrom, rating, source, typeCall, workers]);
	const resetHandler = () => {
		setTypeCall(typesCallData[0].title);
		setWorkers(workersData[0].title);
		setCallFrom(callFromData[0].title);
		setSource(sourceData[0].title);
		setRating(ratingData[0].title);
		setArrors(arrorsData[0].title);
	};
	return (
		<>
			<div className={styles.mainPageWrapper}>
				<div className={styles.headerWrapper}>
					<Header></Header>
				</div>
				<div className={styles.leftBlockWrapper}>
					<LeftBlock></LeftBlock>{" "}
				</div>
				<div className={styles.callList}>
					<div className={styles.callListTitle}>
						<Balance></Balance>
						<DatePicker></DatePicker>
					</div>
					<div className={styles.callListHeader}>
						<div className={styles.find}>
							<img src={searchicon} alt="searchicon" />
							<span>Поиск по звонкам</span>
						</div>

						<div className={styles.sortBlock}>
							{reset && (
								<div
									onClick={resetHandler}
									className={`${styles.reset} ${
										reset ? styles.resetActive : ""
									}`}
								>
									Сбросить фильтры
								</div>
							)}

							<SortDropdown
								currentItem={typeCall}
								setCurrentItem={setTypeCall}
								props={typesCallData}
							></SortDropdown>
							<SortDropdown
								currentItem={workers}
								setCurrentItem={setWorkers}
								props={workersData}
							></SortDropdown>
							<SortDropdown
								currentItem={callFrom}
								setCurrentItem={setCallFrom}
								props={callFromData}
							></SortDropdown>
							<SortDropdown
								currentItem={source}
								setCurrentItem={setSource}
								props={sourceData}
							></SortDropdown>
							<SortDropdown
								currentItem={rating}
								setCurrentItem={setRating}
								props={ratingData}
							></SortDropdown>
							<SortDropdown
								currentItem={arrors}
								setCurrentItem={setArrors}
								props={arrorsData}
							></SortDropdown>
						</div>
					</div>
					<CallList typeCall={typeCall}></CallList>
				</div>
			</div>
		</>
	);
};

const arrorsData = [
	{
		img: "",
		title: "Все ошибки",
	},
	{
		img: "",
		title: "Приветствие",
	},
	{
		img: "",
		title: "Имя",
	},
	{
		img: "",
		title: "Цена",
	},
	{
		img: "",
		title: "Скидка",
	},
	{
		img: "",
		title: "Предзаказ",
	},
	{
		img: "",
		title: "Благодарность",
	},
	{
		img: "",
		title: "Стоп слова",
	},
];

const ratingData = [
	{
		img: "",
		title: "Все оценки",
	},
	{
		img: "",
		title: "Распознать",
	},
	{
		img: "",
		title: "Скрипт не использован",
	},
];
const sourceData = [
	{
		img: "",
		title: "Все источники",
	},
	{
		img: "",
		title: "Yandex",
	},
	{
		img: "",
		title: "Google",
	},
];
const typesCallData = [
	{
		img: "",
		title: "Все типы",
	},
	{
		img: "",
		title: "Входящие",
	},
	{
		img: "",
		title: "Исходящие",
	},
];

const workersData = [
	{
		img: "",
		title: "Все сотрудники",
	},
	{
		img: avatar,
		title: "Константин К.",
	},
	{
		img: avatar,
		title: "Полина З.",
	},
];
const callFromData = [
	{
		img: "",
		title: "Все звонки",
	},
	{
		img: "",
		title: "Все клиенты",
	},
	{
		img: "",
		title: "Новые клиенты",
	},
	{
		img: "",
		title: "Все исполнители",
	},
	{
		img: "",
		title: "Через приложение",
	},
	{
		img: "",
		title: "Прочие звонки",
	},
];
