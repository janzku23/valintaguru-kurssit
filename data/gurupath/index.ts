import { buildGuruPath } from "./buildGuruPath";
import type { GuruGameViewId } from "./types";

export * from "./types";
export * from "./questions";
export * from "./gameConfig";

export function getGuruPath(viewId: GuruGameViewId) {
  return buildGuruPath(viewId);
}
