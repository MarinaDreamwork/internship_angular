export interface EnvironmentInterface {
	production: boolean;
	apiUrl: string;
}

export const environment: EnvironmentInterface = {
	production: true,
	apiUrl: 'https://api.fit-meetups.ru'
}
