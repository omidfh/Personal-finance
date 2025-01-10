import { useQuery } from "@tanstack/react-query";
import { getUserSettings } from "../../api/UsersSettingsApi";
import { UseUserId } from "../Auth/useUserId";

const USER_ID = "0ecfffbe-c8dc-4948-bf9f-771bfa933936";

export function UseUserSettings() {
  const { isLoading, data, error } = useQuery({
    queryFn: () => getUserSettings(USER_ID),
    queryKey: ["setting"],
  });
  return { data, error, isLoading };
}
