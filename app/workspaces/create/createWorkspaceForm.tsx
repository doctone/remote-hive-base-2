"use client";

function createWorkspaceForm({
  addWorkspace,
}: {
  addWorkspace: (formData: FormData) => Promise<void>;
}) {
  const onAction = async (formData: FormData) => {
    addWorkspace(formData)
      .then(() => {
        alert("workspace added!");
        (
          document.getElementById("workspace-form") as unknown as {
            reset: () => void;
          }
        ).reset();
      })
      .catch((error) => {
        console.log(error);

        alert(`Something went wrong: ${JSON.stringify(error.message)}`);
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
      <button
        formAction={onAction}
        type="submit"
        className="self-center border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 w-1/2"
      >
        Add Workspace{" "}
      </button>
    </form>
  );
}

export default createWorkspaceForm;
