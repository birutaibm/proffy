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
    week_day: string;
    from: string;
    to: string;  
  }>;
}