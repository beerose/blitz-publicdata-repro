import { SimpleRolesIsAuthorized } from "@blitzjs/auth"

// simplified it a bit
export type Role = 'MembershipRole' | 'GlobalRole'

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: string
      isAdmin: boolean
      role?: Role
      orgRole?: Role
      orgId?: string
    }
  }
}
