import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import CreateWorkspaceForm from "./createWorkspaceForm";

export default async function Page() {
  const addWorkspace = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const postcode = (formData.get("postcode") as string).replaceAll(" ", "");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase
      .from("workspace")
      .insert({ title, description, imageUrl, postcode });

    if (error) throw error;
  };
  return <CreateWorkspaceForm addWorkspace={addWorkspace} />;
}
