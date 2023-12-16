alter table "public"."workspace" add column "postcode" text;

create policy "Enable read access for all users"
on "public"."workspaceuser"
as permissive
for select
to public
using (true);



