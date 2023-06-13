import * as React from 'react';

export interface IHelloWorldProps {
	description: string;
	isDarkTheme: boolean;
	environmentMessage: string;
	hasTeamsContext: boolean;
	userDisplayName: string;
}

export const HelloWorld = (props: IHelloWorldProps) => {
	const {
		description,
		isDarkTheme,
		environmentMessage,
		hasTeamsContext,
		userDisplayName
	} = props;

	console.log({ description,
		isDarkTheme,
		environmentMessage,
		hasTeamsContext,
		userDisplayName });

	return (
		<div>Hello world</div>
	);
};
