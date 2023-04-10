import { useState, useEffect, useRef } from "react";

export const useComponentVisible = () => {
	const [isComponentVisible, setIsComponentVisible] = useState(false);

	const ref = useRef(null);

	const handleClickOutside = (event: MouseEvent | any): void => {
		// @ts-ignore
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
			window.addEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible };
};
