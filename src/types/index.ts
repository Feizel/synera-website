export interface User {
  id: string;
  org_id: string;
  email: string;
  name: string;
  role: 'OrgAdmin' | 'Manager' | 'Employee' | 'ReadOnly';
  current_role_id?: string;
  tenant_id: string;
}

export interface Skill {
  id: string;
  name: string;
  synonyms: string[];
  category: string;
  tenant_id: string;
}

export interface UserSkill {
  user_id: string;
  skill_id: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  evidence?: string;
  tenant_id: string;
}

export interface Role {
  id: string;
  org_id: string;
  name: string;
  family: string;
  level: number;
  tenant_id: string;
}

export interface RoleSkill {
  role_id: string;
  skill_id: string;
  required_level: 1 | 2 | 3 | 4 | 5;
  weight: number;
  tenant_id: string;
}

export interface PathRecommendation {
  id: string;
  user_id: string;
  target_role_id: string;
  score: number;
  gap_skill_ids: string[];
  learning_item_ids: string[];
  explanation: string;
  created_at: string;
  tenant_id: string;
}

export interface Opportunity {
  id: string;
  org_id: string;
  type: 'role' | 'gig' | 'mentorship' | 'rotation';
  role_id: string;
  team: string;
  location: string;
  status: 'open' | 'closed' | 'draft';
  tenant_id: string;
}

export interface RecommendationResponse {
  topRoles: {
    roleId: string;
    score: number;
    overlap: number;
    transitionPrior: number;
    gapSkills: {
      skillId: string;
      requiredLevel: number;
      currentLevel: number;
    }[];
    learning: {
      learningItemId: string;
      title: string;
      url: string;
    }[];
    explanation: string;
  }[];
  opportunities: {
    opportunityId: string;
    type: string;
    roleId: string;
    matchScore: number;
  }[];
}