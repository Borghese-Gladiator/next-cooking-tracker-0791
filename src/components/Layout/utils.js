import { startCase } from "lodash";

export function getTextFromLink(href) {
  return startCase(href.replace(/\/$/, ""));
}
