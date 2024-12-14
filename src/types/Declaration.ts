import { Child } from './Child';
import { Company } from './Company';
import { Profile } from './Profile';
export type Declaration = {
    id?: string|number
    picture?: string
    comment?: string
    status: string
    registered: string
    company: Company
    child: Child
    firstParent?: Profile
    secondParent: Profile
}