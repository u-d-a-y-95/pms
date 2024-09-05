export type LinkType = {
  label: string;
  url: string;
  icon: React.ElementType;
  children?: LinkType[];
};
