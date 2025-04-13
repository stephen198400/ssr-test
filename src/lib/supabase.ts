import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { parseCookies, setCookie } from '@tanstack/react-start/server';

const supabaseUrl = process.env.SUPABASE_URL || import.meta.env.SUPABASE_URL;
const supabaseKey =
	process.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
	console.error('Missing Supabase credentials. Please check your .env file.');
}

export function getSupabaseServerClient() {
	return createServerClient(supabaseUrl, supabaseKey, {
		cookies: {
			// @ts-ignore Wait till Supabase overload works
			getAll() {
				return Object.entries(parseCookies()).map(([name, value]) => ({
					name,
					value,
				}));
			},
			setAll(cookies) {
				cookies.forEach((cookie) => {
					setCookie(cookie.name, cookie.value);
				});
			},
		},
	});
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
