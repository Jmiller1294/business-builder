"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import type { TenantConfig, Job } from "@/src/lib/config-schema/schema";

// Loads the current business's config + jobs from Supabase.
// Skeleton: wire the queries to your actual tables/columns.
export function useBoard() {
  const [config, setConfig] = useState<TenantConfig | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    (async () => {
      // TODO: scope to the user's current business_id
      const { data: business } = await supabase
        .from("businesses")
        .select("config")
        .limit(1)
        .single();

      const { data: jobRows } = await supabase.from("jobs").select("*");

      if (business?.config) setConfig(business.config as TenantConfig);
      if (jobRows) setJobs(jobRows as Job[]);
      setLoading(false);
    })();
  }, []);

  return { config, jobs, setJobs, loading };
}
