import {
  getSharedGuruQuestionsForGame,
} from "./questions";
import type {
  GuruGameId,
  GuruPathCourse,
  GuruPathNode,
} from "./types";

type BuildGuruPathOptions = {
  gameId: GuruGameId;
  title: string;
  description: string;
  baseLevels?: GuruPathNode[];
};

function validateLevels(
  gameId: GuruGameId,
  levels: GuruPathNode[]
) {
  const orders =
    new Map<number, string>();

  const ids =
    new Set<string>();

  for (const level of levels) {
    if (
      !Number.isInteger(
        level.order
      ) ||
      level.order < 1
    ) {
      throw new Error(
        `GuruPeli "${gameId}": virheellinen order tasolla ${level.id}.`
      );
    }

    const previous =
      orders.get(level.order);

    if (previous) {
      throw new Error(
        `GuruPeli "${gameId}": taso ${level.order} on määritetty kahdesti (${previous} ja ${level.id}).`
      );
    }

    if (ids.has(level.id)) {
      throw new Error(
        `GuruPeli "${gameId}": level id "${level.id}" on määritetty kahdesti.`
      );
    }

    orders.set(
      level.order,
      level.id
    );

    ids.add(level.id);
  }
}

export function buildGuruPath({
  gameId,
  title,
  description,
  baseLevels = [],
}: BuildGuruPathOptions): GuruPathCourse {
  const sharedLevels:
    GuruPathNode[] =
    getSharedGuruQuestionsForGame(
      gameId
    ).map(
      ({
        question,
        order,
      }) => ({
        id:
          `${gameId}-shared-${question.id}`,
        questionId:
          question.id,
        questionSource:
          "shared",
        title:
          question.title,
        order,
        type:
          "challenge",
        points:
          question.points ??
          35,
      })
    );

  const levels = [
    ...baseLevels,
    ...sharedLevels,
  ].sort(
    (a, b) =>
      a.order -
      b.order
  );

  validateLevels(
    gameId,
    levels
  );

  return {
    gameId,
    title,
    description,
    levels,
  };
}
