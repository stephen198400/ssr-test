import { getSupabaseServerClient } from '@/lib/supabase';
import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';

const getData = async () => {
	const supabase = getSupabaseServerClient();
	const { data, error } = await supabase.from('documents').select('*');
	if (error) {
		throw new Error(error.message);
	}
	console.log(data);
	return data;
};

export const getAllData = createServerFn({
	method: 'GET',
}).handler(async () => {
	return await getData();
});

export const useDataQuery = () => {
	return queryOptions({
		queryKey: ['data'],
		queryFn: getData,
	});
};
