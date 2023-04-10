import React, { useEffect, useState } from "react";
import styles from "./callList.module.scss";
import { api } from "../../lib/api";
import { CallListItem, ICallData } from "components/callListItem/callListItem";
import { useAppSelector } from "store";

export const CallList = ({ typeCall }: any) => {
	const [callData, setCallData] = useState<ICallData[]>([]);
	const { dateStart, dateEnd } = useAppSelector((state) => state.appReducer);

	useEffect(() => {
		api
			.post(`/mango/getList?date_start=${dateStart}&date_end=${dateEnd}`)
			.then((res) => setCallData(res.data.results));
	}, [dateStart, dateEnd]);
	useEffect(() => {
		if (typeCall === "Входящие") {
			setCallData(callData.filter((item) => item.in_out === 1));
		}
		if (typeCall === "Исходящие") {
			setCallData(callData.filter((item) => item.in_out === 0));
		}
		if (typeCall === "Все типы") {
			api
				.post(`/mango/getList?date_start=${dateStart}&date_end=${dateEnd}`)
				.then((res) => setCallData(res.data.results));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [typeCall]);

	return (
		<div className={styles.callList}>
			<div className={styles.callListTitle}>
				<div className={styles.type}>
					<span>Тип</span>
				</div>
				<div>Время</div>
				<div>Сотрудник</div>
				<div>Звонок</div>
				<div>Источник</div>
				<div>Оценка</div>
				<div className={styles.record}>Длительность</div>
			</div>
			{callData.length
				? callData.map((callItem) => {
						return (
							<CallListItem
								key={callItem.id + callItem.from_number}
								data={callItem}
							></CallListItem>
						);
				  })
				: "loading"}
		</div>
	);
};
