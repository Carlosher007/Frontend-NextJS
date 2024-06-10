import Link from 'next/link';

export default function Page() {
	return (
		<div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
			You can see all the images in the following link
			<Link href="/dashboard/images">
				<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-950">
					Images
				</button>
			</Link>
		</div>
	);
}
