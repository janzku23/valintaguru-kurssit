// Render text as React nodes: pasted HTML is never executed.
export default function BlogContent({ content }: { content: string }) {
  return <div className="space-y-6 text-lg leading-8 text-slate-700">{content.replace(/\r\n/g, "\n").split(/\n\s*\n/).filter(Boolean).map((block, i) => {
    if (block.startsWith("### ")) return <h3 key={i} className="pt-3 text-xl font-bold text-slate-950">{block.slice(4)}</h3>;
    if (block.startsWith("## ")) return <h2 key={i} className="pt-5 text-2xl font-extrabold text-slate-950">{block.slice(3)}</h2>;
    const lines = block.split("\n");
    if (lines.every(line => line.startsWith("- "))) return <ul key={i} className="list-disc space-y-2 pl-6">{lines.map((line, j) => <li key={j}>{line.slice(2)}</li>)}</ul>;
    return <p key={i} className="whitespace-pre-wrap break-words">{block}</p>;
  })}</div>;
}
