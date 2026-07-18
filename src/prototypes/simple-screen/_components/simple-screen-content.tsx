import { PrototypeComponent } from "proto-plugin";

import { EXAMPLE_DOMAIN } from "./simple-screen-mock-data";

export function SimpleScreenContent() {
  return (
    <PrototypeComponent id="simple-screen-content" className="simple-screen-page">
      <div className="simple-screen-card">
        <h1 className="simple-screen-heading">{EXAMPLE_DOMAIN.title}</h1>
        <p className="simple-screen-text">{EXAMPLE_DOMAIN.description}</p>
        <p className="simple-screen-text">
          <a
            className="simple-screen-link"
            href={EXAMPLE_DOMAIN.learnMoreHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {EXAMPLE_DOMAIN.learnMoreLabel}
          </a>
        </p>
      </div>
    </PrototypeComponent>
  );
}
