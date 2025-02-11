import React, {useState} from "react";

import styles from "./Experience.module.css";
//import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.content}>
            <ul className={styles.history}>
              {history.map((historyItem, id) => (
                <HistoryItem key={id} historyItem={historyItem} />
              ))}
            </ul>
          </div>
        </section>
      );
    }

    function HistoryItem({historyItem})
    {
        const [isExpanded, setIsExpanded] = useState(false);
        const toggleExpand = ()=>{
            setIsExpanded(!isExpanded);
        };

        return (
            <li className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {isExpanded
                    ? historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))
                    : <li>{historyItem.experiences[0]}</li>}
                </ul>
                {historyItem.experiences.length > 1 && (
                  <span className={styles.toggleLink} onClick={toggleExpand}>
                    {isExpanded ? "Less" : "More"}
                  </span>
                )}
              </div>
            </li>
          );
        }