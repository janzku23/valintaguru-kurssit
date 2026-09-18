"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PdfTheoryViewerProps = {
  url: string;
  title?: string;
};

export default function PdfTheoryViewer({
  url,
  title = "Teoria",
}: PdfTheoryViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [scale, setScale] = useState(1);
  const [fitWidth, setFitWidth] = useState(true);

  const [containerWidth, setContainerWidth] = useState(900);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth;

      if (width > 0) {
        setContainerWidth(width);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const handleDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoadingError(false);
  };

  const previousPage = () => {
    setPageNumber((current) => Math.max(1, current - 1));
  };

  const nextPage = () => {
    setPageNumber((current) =>
      Math.min(numPages || current, current + 1)
    );
  };

  const zoomIn = () => {
    setFitWidth(false);

    setScale((current) => {
      return Math.min(2.5, Number((current + 0.15).toFixed(2)));
    });
  };

  const zoomOut = () => {
    setFitWidth(false);

    setScale((current) => {
      return Math.max(0.5, Number((current - 0.15).toFixed(2)));
    });
  };

  const resetToWidth = () => {
    setFitWidth(true);
    setScale(1);
  };

  const toggleFullscreen = async () => {
    const element = containerRef.current;

    if (!element) return;

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen-tilaa ei voitu vaihtaa:", error);
    }
  };

  const pdfWidth = Math.max(
    280,
    Math.min(
      fitWidth ? containerWidth - 32 : 900 * scale,
      fitWidth ? 1200 : 2200
    )
  );

  return (
    <section
      ref={containerRef}
      className={[
        "relative flex flex-col overflow-hidden",
        "border border-slate-200 bg-slate-100",
        "shadow-sm",
        isFullscreen
          ? "h-screen w-screen rounded-none"
          : "min-h-[720px] rounded-3xl",
      ].join(" ")}
    >
      {/* YLÄPALKKI */}
      <div className="z-20 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
            PDF-teoria
          </p>

          <h2 className="truncate text-sm font-bold text-slate-950 sm:text-base">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
          >
            Avaa uuteen välilehteen
          </a>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
          >
            {isFullscreen ? "Poistu koko näytöstä" : "Koko näyttö"}
          </button>
        </div>
      </div>

      {/* PDF */}
      <div className="relative flex min-h-0 flex-1 justify-center overflow-auto bg-slate-200/70 px-2 py-5 sm:px-4 sm:py-7">
        {loadingError ? (
          <div className="m-auto max-w-lg rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-black text-slate-950">
              PDF-tiedostoa ei voitu avata
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tarkista, että PDF löytyy public-kansiosta ja että osoite
              on kirjoitettu oikein.
            </p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white"
            >
              Yritä avata PDF
            </a>
          </div>
        ) : (
          <Document
            file={url}
            onLoadSuccess={handleDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error("PDF load error:", error);
              setLoadingError(true);
            }}
            loading={
              <div className="m-auto rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-600 shadow-sm">
                Ladataan teoriaa...
              </div>
            }
          >
            <div className="mx-auto overflow-hidden rounded-md bg-white shadow-xl">
              <Page
                pageNumber={pageNumber}
                width={pdfWidth}
                renderAnnotationLayer
                renderTextLayer
                loading={
                  <div
                    className="flex min-h-[600px] items-center justify-center bg-white"
                    style={{
                      width: Math.min(pdfWidth, containerWidth - 20),
                    }}
                  >
                    <span className="text-sm font-semibold text-slate-500">
                      Ladataan sivua...
                    </span>
                  </div>
                }
              />
            </div>
          </Document>
        )}
      </div>

      {/* ALAPALKKI */}
      {!loadingError && (
        <div className="z-20 border-t border-slate-200 bg-white px-3 py-3 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* SIVUN VAIHTO */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousPage}
                disabled={pageNumber <= 1}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>

              <div className="min-w-[82px] text-center text-sm font-bold text-slate-700">
                {pageNumber} / {numPages || "–"}
              </div>

              <button
                type="button"
                onClick={nextPage}
                disabled={!numPages || pageNumber >= numPages}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>
            </div>

            {/* ZOOM */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-black text-slate-700 transition hover:bg-slate-50"
              >
                −
              </button>

              <button
                type="button"
                onClick={resetToWidth}
                className={[
                  "h-10 rounded-xl px-3 text-xs font-bold transition",
                  fitWidth
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                Sovita leveyteen
              </button>

              <button
                type="button"
                onClick={zoomIn}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-black text-slate-700 transition hover:bg-slate-50"
              >
                +
              </button>

              {!fitWidth && (
                <span className="hidden min-w-[55px] text-center text-xs font-bold text-slate-500 sm:block">
                  {Math.round(scale * 100)} %
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}