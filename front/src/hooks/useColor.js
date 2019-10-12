import { useMemo } from "react";
import Color from "color";

import toHSL from "../utils/toHSL";

export default function useColor(name) {
	const bg = useMemo(() => toHSL(name), [name]);
	const font = useMemo(() => {
		const color = Color(bg);
		if (color.isLight()) return "#2B303A";
		else return "#D8E1E9";
	}, [bg]);
	return { bg, font };
}
