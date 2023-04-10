/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import styles from "./player.module.scss";
import moment from "moment";
import playIcon from "../../assets/img/player/play.svg";
import pauseIcon from "../../assets/img/player/pause.svg";
import download from "../../assets/img/any/download.svg";
import closeIcon from "../../assets/img/any/closeBtn.svg";

interface Iprops {
	audioSrc: string;
	setAudioDuration: any;
	hover: boolean;
}
// let audio: any;

export const Player = ({ audioSrc, setAudioDuration, hover }: Iprops) => {
	const [playTrack, setPlayTrack] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [hoverProgress, setHoverProgress] = useState("");
	const [progressOffset, setProgressOffset] = useState(0);
	const [audioLeft, setAudioLeft] = useState("");
	const audio = useRef(new Audio());
	useEffect(() => {
		audio.current.src = audioSrc;
		audio.current.onloadedmetadata = () => {
			setDuration(Math.round(audio.current.duration));
			setAudioDuration(formatTime(audio.current.duration));
		};
		audio.current.ontimeupdate = () => {
			setAudioLeft(
				formatTime(audio.current.duration - audio.current.currentTime)
			);
			setCurrentTime(audio.current.currentTime);
		};
	}, []);
	const playHandler = () => {
		if (!playTrack) {
			audio.current.play();
			setPlayTrack(true);
		}
		if (playTrack) {
			audio.current.pause();
			setPlayTrack(false);
		}
	};

	const audioDuration = moment.utc(duration * 1000).format("mm:ss");

	const progress = (currentTime / duration) * 100;
	const changeCurrentTime = (e: any) => {
		audio.current.currentTime = Number(e.target.value);
		setCurrentTime(Number(e.target.value));
	};
	const formatTime = (time: number | string) => {
		return moment.utc(Number(time) * 1000).format("mm:ss");
	};

	const hoverProgressHandler = (e: any) => {
		if (e.nativeEvent.offsetX < 0) {
			setProgressOffset(0);
			return setHoverProgress("00:00");
		}
		if (e.nativeEvent.offsetX > e.target.clientWidth) {
			setProgressOffset(e.target.clientWidth);
			return setHoverProgress(formatTime(duration));
		}
		setProgressOffset(e.nativeEvent.offsetX);
		const hoverProgresValue = Math.round(
			(e.nativeEvent.offsetX / e.target.clientWidth) * duration
		);
		const hoverProgresTime = formatTime(hoverProgresValue);
		setHoverProgress(hoverProgresTime);
	};
	const hoverLeaveHandler = () => {
		setHoverProgress("");
	};
	return (
		<>
			{hover && (
				<div key={audioSrc} className={`${styles.player}`}>
					<div className={styles.duration}>
						{audioLeft !== "Invalid date" ? audioLeft : audioDuration}
					</div>

					<div className={styles.playBtn} onClick={playHandler}>
						{!playTrack ? (
							<img src={playIcon} alt="playIcon" />
						) : (
							<img src={pauseIcon} alt="pauseIcon" />
						)}
					</div>
					<div className={styles.progressBar}>
						<label htmlFor={audioSrc}>
							<span
								style={{ left: progressOffset }}
								className={styles.hoverValue}
							>
								{hoverProgress}
							</span>
							<input
								key={audioSrc}
								style={{
									background: `linear-gradient(to right, #002CFB ${progress}%, #ADBFDF ${progress}%)`,
								}}
								className={styles.progressBarLine}
								id={audioSrc}
								type="range"
								min={0}
								max={duration}
								value={currentTime}
								onChange={changeCurrentTime}
								onMouseMove={hoverProgressHandler}
								onMouseLeave={hoverLeaveHandler}
							/>
						</label>
					</div>
					<div className={styles.downloadLink}>
						<a href={audioSrc} download>
							<img src={download} alt="downloadICon" />
						</a>
					</div>
					<div className={styles.closeBtn}>
						<a href="/#">
							<img src={closeIcon} alt="downloadICon" />
						</a>
					</div>
				</div>
			)}
		</>
	);
};
