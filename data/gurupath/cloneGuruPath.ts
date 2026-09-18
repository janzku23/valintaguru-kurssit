import type { CourseId } from "@/data/courses";
import type { GuruPathCourse } from "./types";

type CloneOptions = {
  courseId: CourseId;
  title: string;
  description: string;
  fromPrefix: string;
  toPrefix: string;
  questionFromPrefix: string;
  questionToPrefix: string;
};

function remapId(id: string, fromPrefix: string, toPrefix: string) {
  if (id === fromPrefix) {
    return toPrefix;
  }

  if (id.startsWith(`${fromPrefix}-`)) {
    return `${toPrefix}${id.slice(fromPrefix.length)}`;
  }

  return `${toPrefix}-${id}`;
}

export function cloneGuruPath(
  base: GuruPathCourse,
  options: CloneOptions
): GuruPathCourse {
  return {
    courseId: options.courseId,
    title: options.title,
    description: options.description,
    sections: base.sections.map((section) => ({
      ...section,
      id: remapId(section.id, options.fromPrefix, options.toPrefix),
      requiresSections: section.requiresSections?.map((sectionId) =>
        remapId(sectionId, options.fromPrefix, options.toPrefix)
      ),
      nodes: section.nodes.map((node) => ({
        ...node,
        id: remapId(node.id, options.fromPrefix, options.toPrefix),
        questionId: remapId(
          node.questionId,
          options.questionFromPrefix,
          options.questionToPrefix
        ),
        next: node.next.map((nextId) =>
          remapId(nextId, options.fromPrefix, options.toPrefix)
        ),
      })),
    })),
  };
}
