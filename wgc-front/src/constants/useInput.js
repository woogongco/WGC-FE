import { useState, useCallback } from 'react';

export default function useInput(defaultValue = undefined) {
	const [value, setValue] = useState(defaultValue || '');
	const handler = useCallback(e => {
		setValue(e.target.value);
	}, []);
	return [value, handler, setValue];
}
