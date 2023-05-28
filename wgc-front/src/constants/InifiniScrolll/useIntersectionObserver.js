import { useEffect, useState } from 'react';

const options = {
	threshould: 0,
	root: null,
	rootMargin: '0px',
};

export default function useIntersectionObserver(targetRef) {
	const [entry, setEntry] = useState();
	const isIntersectiong = entry?.isIntersectiong;

	const updateEntry = entires => {
		const [entry] = entires;
		setEntry(entry);
	};

	useEffect(() => {
		const target = targetRef?.current;
		if (isIntersectiong || !target) return;

		const observer = new IntersectionObserver(updateEntry, options);

		observer.observe(target);
		return () => {
			observer.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [targetRef, isIntersectiong, options.root, options.rootMargin, options.threshould]);

	return entry;
}
