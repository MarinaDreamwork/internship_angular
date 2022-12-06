export interface IUser {
	email: string,
	id: number,
	roles: [
		{
			id: number,
			name: string,
			createdAt: string,
			updatedAt: string,
			UserRole: IUserRole
		}
	],
	iat: number,
	exp: number
}

interface IUserRole {
	id: number,
	userId: number,
	roleId: number,
	createdAt: string,
	updatedAt: string
}