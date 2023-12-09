import { TWorkspace } from "./page";

export const useWorkspaces = () => {
  const getFavourites = async (
    userId: string
  ): Promise<{ data: TWorkspace[] }> => {
    const res = await fetch(`/api/workspaces?userId=${userId}`);
    const data = await res.json();
    return { data };
  };
  const getWorkspaces = async (): Promise<{ data: TWorkspace[] }> => {
    const res = await fetch(`/api/workspaces`);
    const data = await res.json();
    return { data };
  };
  return { getWorkspaces, getFavourites };
};
