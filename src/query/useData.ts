import { getAllData } from '@/serverFn/getAllData';
import { queryOptions } from '@tanstack/react-query';

export const useDataQuery = () => {
	return queryOptions({
		queryKey: ['data'],
		queryFn: getAllData,
	});
};
