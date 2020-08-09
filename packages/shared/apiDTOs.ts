export interface GetConnectionsResponseDTO {
  total: number;
}

export interface PostClassesBodyDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
  schedule: Array<{
    week_day: number;
    from: string;
    to: string;  
  }>;
}

export interface GetClassesQueryDTO {
  subject: string;
  time: string;
  week_day: number;
}

export interface PostClassesResponseDTO extends Omit<PostClassesBodyDTO, 'cost'> {
  id: number;
  cost: number;
}

export type GetClassesResponseDTO = Array<PostClassesResponseDTO>;