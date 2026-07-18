import { PROTOTYPE_VIEW_SHELL_CLASS, PrototypeComponent } from "proto-plugin";
import { cn } from "ui";

import { EXAMPLE_DOMAIN } from "./simple-screen-mock-data";
import styles from "../simple-screen.module.css";

export function SimpleScreenContent() {
  return (
    <PrototypeComponent
      id="simple-screen-content"
      className={cn(PROTOTYPE_VIEW_SHELL_CLASS, styles.view)}
    >
      <div className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.heading}>{EXAMPLE_DOMAIN.title}</h1>
          <p className={styles.text}>{EXAMPLE_DOMAIN.description}</p>
          <p className={styles.text}>
            <a
              className={styles.link}
              href={EXAMPLE_DOMAIN.learnMoreHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EXAMPLE_DOMAIN.learnMoreLabel}
            </a>
          </p>
        </div>
      </div>
    </PrototypeComponent>
  );
}
