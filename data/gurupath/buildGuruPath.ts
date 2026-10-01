import {
  getGuruGameQuestionsForGame,
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
};

function validateLevels(
  gameId: GuruGameId,
  levels: GuruPathNode[]
) {
  const usedOrders =
    new Map<number, string>();

  const usedIds =
    new Set<string>();

  for (const level of levels) {
    if (
      !Number.isInteger(level.order) ||
      level.order < 1
    ) {
      throw new Error(
        `GuruPeli "${gameId}": virheellinen tasonumero kysymyksellä ${level.questionId}.`
      );
    }

    const previous =
      usedOrders.get(level.order);

    if (previous) {
      throw new Error(
        `GuruPeli "${gameId}": taso ${level.order} on määritelty kahdesti (${previous} ja ${level.questionId}).`
      );
    }

    if (
      usedIds.has(level.id)
    ) {
      throw new Error(
        `GuruPeli "${gameId}": level id "${level.id}" on määritelty kahdesti.`
      );
    }

    usedOrders.set(
      level.order,
      level.questionId
    );

    usedIds.add(level.id);
  }
}

export function buildGuruPath({
  gameId,
  title,
  description,
}: BuildGuruPathOptions): GuruPathCourse {
  /**
   * Kaikki tasot muodostetaan AINOASTAAN questions.ts-tiedostosta.
   */
  const levels: GuruPathNode[] =
    getGuruGameQuestionsForGame(
      gameId
    ).map(
      ({
        question,
        order,
      }) => ({
        id:
          `${gameId}-${question.id}`,

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
          question.points ?? 35,
      })
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
