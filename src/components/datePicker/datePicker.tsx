import React, { useState, useEffect } from "react";
import styles from "./datePicker.module.scss";
import { useComponentVisible } from "lib/hooks/useComponentVisible";
import { useAppDispatch } from "store";
import { setDate } from "store/appReducer";
import moment from "moment";
import calendarLogo from "../../assets/img/any/calindar.svg";

const pickerItems = [
	{
		title: "3 дня",
	},
	{
		title: "Неделя",
	},
	{
		title: "Месяц",
	},
	{
		title: "Год",
	},
];

export const DatePicker = () => {
	const [current, setCurrent] = useState(pickerItems[0].title);
	const [inputAfter, setInputAfter] = useState("");
	const [inputBefore, setInputBefore] = useState("");
	const { isComponentVisible, setIsComponentVisible, ref } =
		useComponentVisible();
	const dispatch = useAppDispatch();

	const dateFormat = (date: any) => {
		return moment(date).format("YYYY-MM-DD");
	};
	const inputDateFormat = (date: any) => {
		date.split(".").reverse().join("-");
		return moment(date).format("YYYY-DD-MM");
	};
	useEffect(() => {
		setInputAfter("");
		setInputBefore("");
	}, [current]);

	useEffect(() => {
		let dateNow = Date.now();

		if (inputAfter.length === 8 && inputBefore.length === 8) {
			const dateStart = inputDateFormat(inputAfter);
			const dateEnd = inputDateFormat(inputBefore);
			dispatch(setDate({ dateStart, dateEnd }));
		}
		if (
			current === "3 дня" &&
			inputAfter.length !== 8 &&
			inputBefore.length !== 8
		) {
			let dateStart = dateFormat(dateNow - 86400000 * 3);
			const dateNowFormat = dateFormat(dateNow);
			dispatch(setDate({ dateStart, dateEnd: dateNowFormat }));
		}
		if (
			current === "Неделя" &&
			inputAfter.length !== 8 &&
			inputBefore.length !== 8
		) {
			let dateStart = dateFormat(dateNow - 86400000 * 7);
			const dateNowFormat = dateFormat(dateNow);
			dispatch(setDate({ dateStart, dateEnd: dateNowFormat }));
		}
		if (
			current === "Месяц" &&
			inputAfter.length !== 8 &&
			inputBefore.length !== 8
		) {
			let dateStart = dateFormat(dateNow - 86400000 * 30);
			const dateNowFormat = dateFormat(dateNow);
			dispatch(setDate({ dateStart, dateEnd: dateNowFormat }));
		}
		if (
			current === "Год" &&
			inputAfter.length !== 8 &&
			inputBefore.length !== 8
		) {
			let dateStart = dateFormat(dateNow - 86400000 * 365);
			const dateNowFormat = dateFormat(dateNow);
			dispatch(setDate({ dateStart, dateEnd: dateNowFormat }));
		}
	}, [current, inputAfter, inputBefore, dispatch]);

	const leftClickHandler = () => {
		// eslint-disable-next-line eqeqeq
		const index = pickerItems.findIndex((item) => item.title == current);
		// eslint-disable-next-line eqeqeq
		if (index == 0) {
			return setCurrent(pickerItems[pickerItems.length - 1].title);
		}
		setCurrent(pickerItems[index - 1].title);
	};
	const rightClickHandler = () => {
		// eslint-disable-next-line eqeqeq
		const index = pickerItems.findIndex((item) => item.title == current);
		// eslint-disable-next-line eqeqeq
		if (index == pickerItems.length - 1) {
			return setCurrent(pickerItems[0].title);
		}
		setCurrent(pickerItems[index + 1].title);
	};
	const inputAfterHandeler = (e: any) => {
		setInputAfter(maskDate(e.target.value));
	};
	const inputBeforeHandeler = (e: any) => {
		setInputBefore(maskDate(e.target.value));
	};
	const maskDate = (value: any) => {
		let v = value.replace(/\D/g, "").slice(0, 10);
		if (v.length >= 5) {
			return `${v.slice(0, 2)}.${v.slice(2, 4)}.${v.slice(4)}`;
		} else if (v.length >= 3) {
			return `${v.slice(0, 2)}.${v.slice(2)}`;
		}
		return v;
	};

	return (
		<div ref={ref} className={styles.datePicker}>
			<div className={styles.title}>
				<span onClick={leftClickHandler} className={styles.left}></span>
				<div
					className={styles.titleValueWrapper}
					onClick={() => setIsComponentVisible((prev) => !prev)}
				>
					<span className={styles.calendarIcon}></span>
					<span className={styles.titelValue}>
						{inputAfter || inputBefore ? "Своя" : current}
					</span>
				</div>
				<span onClick={rightClickHandler} className={styles.right}></span>
			</div>
			{isComponentVisible && (
				<div className={styles.dropdown}>
					<ul>
						{pickerItems.map((item) => {
							return (
								<li
									onClick={() => setCurrent(item.title)}
									key={item.title}
									className={`${item.title == current ? styles.active : ""}`}
								>
									{item.title}
								</li>
							);
						})}
					</ul>
					<div className={styles.inputDateTitle}>Указать даты</div>
					<div className={styles.inputDateBlock}>
						<label className={styles.inputAfter}>
							<input
								value={inputAfter}
								onChange={inputAfterHandeler}
								// placeholder="__.__.__"
								type="text"
								maxLength={8}
							/>
						</label>
						<span>-</span>
						<label className={styles.inputBefore}>
							<input
								value={inputBefore}
								onChange={inputBeforeHandeler}
								// placeholder="__.__.__"
								type="text"
								maxLength={8}
							/>
						</label>
						<img src={calendarLogo} alt="calendarLogo" />
					</div>
				</div>
			)}
		</div>
	);
};
