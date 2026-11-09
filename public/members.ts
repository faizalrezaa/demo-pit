export interface Member {
  id: number;
  name: string;
  role: string;
  bio?: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Andi",
    role: "Frontend Developer",
    bio: "Berpengalaman dalam pengembangan antarmuka web.",
  },
  {
    id: 2,
    name: "Budi",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Citra",
    role: "UI/UX Designer",
    bio: "Tertarik pada user experience dan interface design.",
  },
];
