# Owner-reviewed GONA AI questions

GONA AI creates GuruPeli drafts only. The owner selects `valintakoe-g`, `oikis` or `shared` and approves the question in the private GONA AI studio. Approval sends a server-to-server request to the `gona-gurupeli-import` Edge Function. Its dedicated hashed bearer credential permits only bounded GuruPeli inserts and cannot read student data. Existing metrics credentials remain read-only.

The database table `public.gona_gurupeli_questions` has RLS enabled and no anon/authenticated grants. Correct answers are read only by ValintaGuru server code. Only `active` imports enter the game. `probe` and `withdrawn` rows never enter the playable bank. The public map keeps its explicit answer-free DTO; scoring still resolves trusted server-side questions and checks course access and sequential progress.

Stable identity orders starting at 1,000,000 append imports after existing questions. A shared question appears once in the combined view. Repeated import IDs with the same content return the original receipt; changed content is rejected. Reviewed content is immutable through this importer.

GONA AI records approval/rejection, category, timestamps and receiver receipts. A failed or ambiguous transfer remains unconfirmed and can be retried idempotently. Rejection alone never sends content. Published questions cannot be rejected through the draft controls; withdrawal requires separate content administration.

Deployment: apply `GONA-GURUPELI-IMPORT.sql`, deploy the authenticated Edge Function and this server bank integration. `GET /api/gurupath/import-status` returns readiness without exposing questions or answers. No additional Vercel secret is needed: the server uses its existing Supabase admin client. Store the dedicated import token only as GONA AI's `GURUPELI_IMPORT_TOKEN` Site secret.

Validation: `npm run typecheck`, `npm test`, `node --test scripts/test-gona-gurupeli.cjs`, and `npm run build`.
