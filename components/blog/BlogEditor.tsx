"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogSlug, type BlogPost } from "@/lib/blog/model";
import BlogContent from "./BlogContent";

const newPostTemplate = {
  title: "Kirjoituksen otsikko",
  slug: "",
  excerpt: "Lyhyt tiivistelmä kirjoituksesta.",
  content: `## Otsikko

Kirjoita tähän tekstikappale. Voit muokata tätä pohjaa vapaasti.

- Ensimmäinen kohta
- Toinen kohta
- Kolmas kohta`,
  category: "Opiskeluvinkit",
  author: "ValintaGuru",
};
export default function BlogEditor({ initialPosts }: { initialPosts: BlogPost[] }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState(newPostTemplate);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  function open(post: BlogPost | null) {
    if (JSON.stringify(form) !== JSON.stringify(editing ? pick(editing) : newPostTemplate)
      && !window.confirm("Hylätäänkö tallentamattomat muutokset?")) return;
    setEditing(post); setForm(post ? pick(post) : { ...newPostTemplate }); setPreview(false); setMessage("");
  }
  function pick(post: BlogPost) { return { title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content, category: post.category, author: post.author }; }
  function insertBlock(text: string) {
    const textarea = contentRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = form.content.slice(0, start);
    const after = form.content.slice(end);
    const prefix = before ? (before.endsWith("\n\n") ? "" : before.endsWith("\n") ? "\n" : "\n\n") : "";
    const suffix = after ? (after.startsWith("\n\n") ? "" : after.startsWith("\n") ? "\n" : "\n\n") : "";
    const content = before + prefix + text + suffix + after;
    if (content.length > 100000) return;
    setForm(current => ({ ...current, content }));
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + text.length);
    });
  }
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const published = submitter?.value === "publish";
    setBusy(true); setMessage(""); setError(false);
    try {
      const response = await fetch("/api/admin/blogi", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: editing?.id, revision: editing?.updated_at, published }) });
      if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("Tallennus epäonnistui. Tarkista kirjautuminen.");
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Tallennus epäonnistui.");
      const post = body.post as BlogPost;
      setEditing(post); setForm(pick(post));
      setPosts(current => [post, ...current.filter(item => item.id !== post.id)]);
      setMessage(published ? "Kirjoitus julkaistiin. Se on nyt kaikkien luettavissa." : "Luonnos tallennettu. Kirjoitus ei näy julkisessa blogissa.");
      router.refresh();
    } catch (e) { setError(true); setMessage(e instanceof Error ? e.message : "Verkkoyhteys katkesi. Yritä uudelleen."); }
    finally { setBusy(false); }
  }
  async function removePost() {
    if (!editing || busy) return;
    if (!window.confirm(`Poistetaanko ”${editing.title}” pysyvästi? Kirjoitus poistuu myös julkisesta blogista. Poistoa ei voi perua.`)) return;
    setBusy(true); setMessage(""); setError(false);
    try {
      const response = await fetch("/api/admin/blogi", {
        method: "DELETE", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing.id, revision: editing.updated_at }),
      });
      if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("Poisto epäonnistui. Tarkista kirjautuminen.");
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Kirjoitusta ei voitu poistaa.");
      setPosts(current => current.filter(post => post.id !== editing.id));
      setEditing(null); setForm({ ...newPostTemplate }); setPreview(false);
      setMessage("Kirjoitus poistettu.");
      router.refresh();
    } catch (e) { setError(true); setMessage(e instanceof Error ? e.message : "Poisto epäonnistui. Yritä uudelleen."); }
    finally { setBusy(false); }
  }
  const fieldStyle = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-950 focus:border-blue-600 focus:outline-blue-600";
  return <div className="mt-8 grid gap-8 xl:grid-cols-[280px_1fr]">
    <aside className="space-y-3" aria-label="Kirjoitukset">
      <button disabled={busy} onClick={() => open(null)} className="w-full rounded-xl bg-slate-950 px-4 py-3 font-bold text-white">+ Uusi kirjoitus</button>
      {posts.length === 0 && <p className="py-4 text-slate-600">Ei vielä kirjoituksia. Aloita ensimmäisestä!</p>}
      {posts.length > 0 && <h2 className="pt-3 text-sm font-bold text-slate-600">Aiemmat kirjoitukset</h2>}
      {posts.map(post => <button key={post.id} disabled={busy} onClick={() => open(post)} aria-pressed={editing?.id === post.id} className={`w-full rounded-xl border p-4 text-left ${editing?.id === post.id ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"}`}>
        <span className="block break-words font-bold">{post.title}</span><span className="mt-2 block text-sm text-slate-600">{post.published_at ? "Julkaistu" : "Luonnos"}</span><span className="mt-3 block text-sm font-bold text-blue-700">Muokkaa →</span>
      </button>)}
    </aside>
    <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><h2 className="text-2xl font-extrabold">{editing ? "Muokkaa kirjoitusta" : "Uusi blogikirjoitus"}</h2><button type="button" onClick={() => setPreview(!preview)} className="rounded-xl border border-slate-300 px-4 py-2 font-bold">{preview ? "Takaisin editoriin" : "Esikatsele"}</button></div>
      {message && <p role={error ? "alert" : "status"} className={`mb-5 rounded-xl p-4 ${error ? "bg-red-50 text-red-800" : "bg-emerald-50 text-emerald-900"}`}>{message}</p>}
      {editing?.published_at && <Link href={`/blogi/${editing.slug}`} className="mb-5 inline-block font-bold text-blue-700">Avaa julkaistu kirjoitus →</Link>}
      <form onSubmit={save}>
        <fieldset disabled={busy} className={preview ? "hidden" : "space-y-5"}>
          <label className="block font-bold">Otsikko<input required maxLength={200} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className={fieldStyle} /></label>
          <label className="block font-bold">Osoitteen loppuosa<input maxLength={120} placeholder={blogSlug(form.title) || "kirjoituksen-otsikko"} pattern="[a-z0-9]+(-[a-z0-9]+)*" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className={fieldStyle} /><span className="mt-1 block break-all text-sm font-normal text-slate-500">/blogi/{form.slug || blogSlug(form.title)} · Tyhjä kenttä muodostetaan otsikosta. Säilytä julkaistun kirjoituksen osoite.</span></label>
          <div className="grid gap-5 sm:grid-cols-2">{([ ["category", "Aihe", 80], ["author", "Kirjoittaja", 100] ] as const).map(([key, label, max]) => <label key={key} className="block font-bold">{label}<input required maxLength={max} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} className={fieldStyle} /></label>)}</div>
          <label className="block font-bold">Tiivistelmä<textarea required rows={3} maxLength={500} value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} className={fieldStyle} /></label>
          <div>
            <label htmlFor="blog-content" className="block font-bold">Kirjoituksen sisältö</label>
            <p id="blog-content-help" className="mt-1 text-sm leading-6 text-slate-500">Muokkaa pohjaa tai lisää sisältöä painikkeilla. Näet ulkoasun alla.</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Lisää sisältöä kirjoitukseen">
              {([
                ["Lisää otsikko", "## Uusi otsikko"],
                ["Lisää tekstikappale", "Kirjoita tähän uusi tekstikappale."],
                ["Lisää lista", "- Ensimmäinen kohta\n- Toinen kohta\n- Kolmas kohta"],
              ] as const).map(([label, text]) => <button key={label} type="button" onClick={() => insertBlock(text)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold hover:bg-slate-50 disabled:opacity-50">{label}</button>)}
            </div>
            <textarea id="blog-content" ref={contentRef} aria-describedby="blog-content-help" required rows={12} maxLength={100000} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className={fieldStyle} />
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-500">Tekstin esikatselu</p>
              <BlogContent content={form.content} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3"><button type="submit" value="draft" className="rounded-xl border border-slate-300 px-5 py-3 font-bold disabled:opacity-50">{editing?.published_at ? "Siirrä luonnokseksi" : "Tallenna luonnos"}</button><button type="submit" value="publish" className="rounded-xl bg-blue-700 px-5 py-3 font-bold text-white disabled:opacity-50">{busy ? "Tallennetaan…" : editing?.published_at ? "Tallenna ja julkaise muutokset" : "Julkaise kirjoitus"}</button></div>
        </fieldset>
      </form>
      {editing && <div className="mt-6 border-t border-slate-200 pt-5"><button type="button" disabled={busy} onClick={removePost} className="rounded-xl border border-red-200 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50 disabled:opacity-50">Poista kirjoitus</button></div>}
      {preview && <article className="break-words"><p className="text-sm font-bold text-blue-700">Esikatselu · {form.category}</p><h1 className="my-5 text-3xl font-extrabold">{form.title || "Kirjoituksen otsikko"}</h1><p className="mb-5 text-slate-500">{form.author}</p><p className="mb-8 text-xl leading-8 text-slate-600">{form.excerpt}</p><BlogContent content={form.content} /></article>}
    </section>
  </div>;
}
