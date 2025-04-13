import { DataTable } from '@/components/data-table';
import { SectionCards } from '@/components/section-cards';
import { useDataQuery } from '@/query/useData';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/_dashboard/')({
	component: RouteComponent,
	loader: async ({ context }) => {
		await context.queryClient.prefetchQuery(useDataQuery());
	},
});

function RouteComponent() {
	const { data: loaderData } = useQuery(useDataQuery());

	return (
		<>
			<SectionCards />
			<div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
			<DataTable data={loaderData || []} />
		</>
	);
}
