import { SiteNavigationBlock } from "components/siteNavigationBlock/siteNavigationBlock";
import styles from "./leftBlock.module.scss";
import React from "react";
import { MainLogo } from "components/mainLogo/mainLogo";
import { LargeBtnWithLogo } from "components/largeBtnWithLogo/largeBtnWithLogo";
import warningIcon from "../../assets/img/btnLogo/warning.svg";
import addIcon from "../../assets/img/btnLogo/add.svg";

export const LeftBlock = () => {
	return (
		<div className={styles.leftBlock}>
			<MainLogo></MainLogo>
			<SiteNavigationBlock></SiteNavigationBlock>
			<div className={styles.btnBlock}>
				<LargeBtnWithLogo
					style={styles.order}
					title="Добавить заказ"
					logo={addIcon}
				></LargeBtnWithLogo>
				<LargeBtnWithLogo
					style={styles.pay}
					title="Оплата"
					logo={warningIcon}
				></LargeBtnWithLogo>
			</div>
		</div>
	);
};
