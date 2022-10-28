export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title?: string;
	key?: string;
	icon?: React.ReactNode;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
	key?: string,
	icon?: React.ReactNode;
}
