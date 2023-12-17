CREATE TABLE IF NOT EXISTS "public"."rating" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp WITH time zone DEFAULT "now"() NOT NULL,
    "workspaceId" "uuid" NOT NULL,
    "ratedById" "uuid" NOT NULL,
    "staff" "float4",
    "comfort" "float4",
    "wifi" "float4",
    "facilities" "float4",
    "cleanliness" "float4",
    FOREIGN KEY ("workspaceId") REFERENCES "workspace" ("id"),
    FOREIGN KEY ("ratedById") REFERENCES "auth"."users" ("id")
    );

CREATE POLICY "Enable read access for all users" ON "public"."rating" FOR SELECT USING (true);
