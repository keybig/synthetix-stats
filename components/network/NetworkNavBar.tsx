import { NetworkId } from "@synthetixio/contracts-interface";
import { ReactNode } from "react";
import { QueryClient } from "react-query";

import styles from "./NetworkNavBar.module.css";

type Props = {
  // netwerk: NetworkId
  handle: (buttons: netButton) => void;
  current: number;
  children?: ReactNode;
};

interface netButton {
  id: number;
  title: string;
}

const NetworkNavBar = (props: Props) => {

  const buttonMap: netButton[] = [
    { id: 20, title: "All Networks" },
    { id: 1, title: "Ethereum" },
    { id: 10, title: "Optimism" },
    
  ];

  const grafana =
    "https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full";

  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.navNetwork}>
          {buttonMap.map((buttonMap) => (
            <button
              key={buttonMap.id}
              onClick={() => props.handle(buttonMap)}
              className={
                buttonMap.id === props.current
                  ? styles.navCurrent
                  : styles.navInactive
              }
            >
              {buttonMap.title}
            </button>
          ))}
        </div>

        <div className={styles.navMoreStats}>
          <button className={styles.navAdvancedStats}>
            <a href={grafana}>Advanced Stats</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkNavBar;
