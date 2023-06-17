import { Ability, AbilityBuilder } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = role => {
  const { can, rules } = new AbilityBuilder(AppAbility)
  if (!role) {
    // if (hub === 0) can('read', 'admin')
    can('read', 'every-page')
  } else {
    can('read', 'acl-page')
  }

  return rules
}

export const buildAbilityFor = (role, subject) =>
  new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object.type
  })

export const defaultACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
