import 'server-only';
import {cache} from 'react';
import {createSupabaseAdmin} from '@/lib/supabase/server-admin';
import {guruGameQuestions,getGuruGameQuestion} from '@/data/gurupath/questions';
import {buildGuruPath} from '@/data/gurupath/buildGuruPath';
import {mergeGuruQuestions} from '@/lib/gurupath/importedQuestions';
import type {GuruGameViewId} from '@/data/gurupath/types';
// Request-scoped memoization. Correct answers never enter a client module.
const loadBank=cache(async()=>{try{const {data,error}=await createSupabaseAdmin().from('gona_gurupeli_questions').select('id,ordinal,category,question').eq('status','active').order('ordinal',{ascending:true});if(error)throw Error(error.code);return mergeGuruQuestions(guruGameQuestions,data||[])}catch{console.error('GuruPeli: approved import bank unavailable; serving static questions.');return guruGameQuestions}});
export async function getGuruPathWithImports(view: GuruGameViewId){return buildGuruPath(view,await loadBank())}
export async function getGuruQuestionWithImports(id:string){return getGuruGameQuestion(id,await loadBank())}
