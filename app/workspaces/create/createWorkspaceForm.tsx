"use client";

import Notification, { notify } from "../../../components/Notification";

function createWorkspaceForm({
  addWorkspace,
}: {
  addWorkspace: (formData: FormData) => Promise<void>;
}) {
  const onAction = async (formData: FormData) => {
    addWorkspace(formData)
      .then(() => {
        notify("workspace added!", "success");

        (
          document.getElementById("workspace-form") as unknown as {
            reset: () => void;
          }
        ).reset();
      })
      .catch((error) => {
        notify(
          `Something went wrong: ${JSON.stringify(error.message)}`,
          "error"
        );
      });
  };
  return (
    <form
      id="workspace-form"
      className="self-center animate-in flex-1 flex flex-col w-1/2 justify-start gap-2 text-foreground"
    >
      <div className="flex flex-col mb-5 gap-2">
        <label className="text-md" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="title"
          placeholder="Enter a title for your workspace"
          required
        />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label className="text-md" htmlFor="description">
          Description
        </label>
        <textarea
          rows={4}
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="description"
          placeholder="Please describe your workspace"
          required
        />
      </div>
      <div className="flex flex-col mb-5 gap-2">
        <label className="text-md" htmlFor="imageUrl">
          Image Url
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="imageUrl"
          placeholder="Enter an image URL for your workspace ( Image upload coming soon )"
        />
      </div>
      <button
        formAction={onAction}
        type="submit"
        className="self-center border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 w-1/2"
      >
        Add Workspace{" "}
      </button>
      <Notification />
    </form>
  );
}

export default createWorkspaceForm;
