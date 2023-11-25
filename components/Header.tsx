export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="text-3xl">Welcome to Remote Hive</h1>
      <p className="text-2xl !leading-tight mx-auto max-w-xl text-center">
        Discover new places to work remotely in your local area{" "}
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
