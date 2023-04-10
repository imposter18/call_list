import React, { useEffect, useState } from "react";
import styles from "./callListItem.module.scss";
import moment from "moment";
import { api } from "lib/api";
import { Player } from "components/player/player";
import inCallLogo from "../../assets/img/any/in.svg";
import outCallLogo from "../../assets/img/any/out.svg";

export interface ICallData {
	id: number;
	partnership_id: string;
	in_out: 0 | 1 | "";
	date: Date;
	person_avatar: string;
	from_number: string;
	source: string | "";
	errors: string[];
	record: string | "";
}
interface Iprops {
	data: ICallData;
}

export const CallListItem = ({ data }: Iprops) => {
	const [audio, setAudio] = useState("");
	const [audioDuration, setAudioDuration] = useState(null);
	const [hover, setHover] = useState(false);
	const {
		in_out,
		date,
		person_avatar,
		from_number,
		source,
		errors,
		record,
		partnership_id,
	} = data;

	useEffect(() => {
		if (partnership_id && record) {
			api
				.post(
					`mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
					{},
					{
						responseType: "blob",
					}
				)
				.then((res) => {
					const url = URL.createObjectURL(res.data);
					setAudio(url);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`${styles.wrapper} ${hover ? styles.onHover : ""}`}
		>
			<div className={`${styles.callListItem} `}>
				<div className={styles.callType}>
					<img src={in_out ? inCallLogo : outCallLogo} alt="callTypeIcon" />
				</div>
				<div className={styles.time}>{moment(date).format("HH:mm ")}</div>
				<div className={styles.avatar}>
					{person_avatar ? <img src={person_avatar} alt="person_avatar" /> : ""}
				</div>
				<div className={styles.phNumber}>{from_number}</div>
				<div className={styles.source}>{source}</div>
				<div>
					{errors.map((item) => {
						return (
							<div className={styles.errors} key={item}>
								{item}
							</div>
						);
					})}
				</div>
				<div className={styles.player}>
					{audio && (
						<Player
							hover={hover}
							setAudioDuration={setAudioDuration}
							key={from_number}
							audioSrc={audio}
						/>
					)}
					<span className={styles.audioDurationTitle}>
						{audio && audioDuration && !hover ? audioDuration : null}
					</span>
				</div>
			</div>
		</div>
	);
};
