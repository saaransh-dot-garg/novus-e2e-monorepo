export interface Member {
  id: string;
  role: string;
}

export function addMember(members: Member[], member: Member): Member[] {
  const added = [...members, member];
  return added;
}

export function removeMember(members: Member[], memberId: string): Member[] {
  const kept = members.filter((member) => member.id !== memberId);
  return kept;
}

export function changeRole(members: Member[], memberId: string, role: string): Member[] {
  const changed = members.map((member) => (member.id === memberId ? { ...member, role } : member));
  return changed;
}
