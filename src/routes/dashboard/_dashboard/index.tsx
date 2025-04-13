import { DataTable } from '@/components/data-table';
import { SectionCards } from '@/components/section-cards';
import data from '@/dashboard/data.json';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/dashboard/_dashboard/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<SectionCards />
			<div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
			<DataTable data={data} />
		</>
	);
}
