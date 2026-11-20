export interface Member {
  id: string;
  role: string;
}

export function addMember(members: Member[], member: Member): Member[] {
  const added = members.concat(member);
  return added;
}

export function changeRole(members: Member[], memberId: string, nextRole: string): Member[] {
  const changed = members.map((member) =>
    member.id === memberId ? { ...member, role: nextRole } : member
  );
  return changed;
}
