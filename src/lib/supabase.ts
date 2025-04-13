import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { parseCookies, setCookie } from '@tanstack/react-start/server';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

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
