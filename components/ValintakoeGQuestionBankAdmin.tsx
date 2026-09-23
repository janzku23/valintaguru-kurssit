"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type Category = {
  id: number;
  name: string;
};

type Question = {
  exerciseId: string;
  exerciseTitle: string;
  questionId: string;
  prompt: string;
  categoryId: number;
  difficulty: "easy" | "medium" | "hard";
  questionType: string;
  sourcePage: string | null;
};

export default function ValintakoeGQuestionBankAdmin() {
  const [categories, setCategories] =
    useState<Category[]>([]);
  const [questions, setQuestions] =
    useState<Question[]>([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] =
    useState("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState("all");
  const [savingId, setSavingId] =
    useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/admin/valintakoe-g/questions",
        { cache: "no-store" }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ?? "Tietojen haku epäonnistui."
        );
      }

      setCategories(data.categories ?? []);
      setQuestions(data.questions ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Tietojen haku epäonnistui."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const filtered = useMemo(
    () =>
      questions.filter((question) => {
        const categoryOk =
          categoryFilter === "all" ||
          question.categoryId ===
            Number(categoryFilter);
        const difficultyOk =
          difficultyFilter === "all" ||
          question.difficulty ===
            difficultyFilter;

        return categoryOk && difficultyOk;
      }),
    [
      categoryFilter,
      difficultyFilter,
      questions,
    ]
  );

  function updateLocal(
    questionId: string,
    patch: Partial<Question>
  ) {
    setQuestions((current) =>
      current.map((question) =>
        question.questionId === questionId
          ? { ...question, ...patch }
          : question
      )
    );
  }

  async function save(question: Question) {
    setSavingId(question.questionId);
    setError(null);

    try {
      const response = await fetch(
        "/api/admin/valintakoe-g/questions",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            exerciseId: question.exerciseId,
            questionId: question.questionId,
            categoryId: question.categoryId,
            difficulty: question.difficulty,
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ?? "Tallennus epäonnistui."
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Tallennus epäonnistui."
      );
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-wide text-blue-700">
          Valintakoe G
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">
          Tehtäväpankki
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Muuta tehtävien ensisijaista
          lukutaitokategoriaa ja vaikeustasoa.
          Muutos vaikuttaa tulevien suoritusten
          analytiikkaan. Vanhojen suoritusten snapshotit
          säilyvät ennallaan.
        </p>
      </section>

      <section className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">
          Kategoria
          <select
            value={categoryFilter}
            onChange={(event) =>
              setCategoryFilter(event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
          >
            <option value="all">Kaikki kategoriat</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.id}. {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-bold text-slate-700">
          Vaikeustaso
          <select
            value={difficultyFilter}
            onChange={(event) =>
              setDifficultyFilter(
                event.target.value
              )
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
          >
            <option value="all">Kaikki</option>
            <option value="easy">Helppo</option>
            <option value="medium">Keskitaso</option>
            <option value="hard">Vaikea</option>
          </select>
        </label>
      </section>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          Ladataan tehtäväpankkia...
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((question) => (
            <article
              key={question.questionId}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-wide text-slate-400">
                {question.exerciseTitle} ·{" "}
                {question.questionId}
                {question.sourcePage
                  ? ` · sivu ${question.sourcePage}`
                  : ""}
              </p>
              <h2 className="mt-2 font-black leading-7 text-slate-950">
                {question.prompt}
              </h2>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_220px_auto] lg:items-end">
                <label className="text-sm font-bold text-slate-700">
                  Lukutaitokategoria
                  <select
                    value={question.categoryId}
                    onChange={(event) =>
                      updateLocal(
                        question.questionId,
                        {
                          categoryId: Number(
                            event.target.value
                          ),
                        }
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                  >
                    {categories.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.id}. {category.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-bold text-slate-700">
                  Vaikeustaso
                  <select
                    value={question.difficulty}
                    onChange={(event) =>
                      updateLocal(
                        question.questionId,
                        {
                          difficulty:
                            event.target.value as Question["difficulty"],
                        }
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                  >
                    <option value="easy">Helppo</option>
                    <option value="medium">
                      Keskitaso
                    </option>
                    <option value="hard">Vaikea</option>
                  </select>
                </label>

                <button
                  type="button"
                  onClick={() => void save(question)}
                  disabled={
                    savingId === question.questionId
                  }
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white disabled:opacity-50"
                >
                  {savingId === question.questionId
                    ? "Tallennetaan..."
                    : "Tallenna"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
