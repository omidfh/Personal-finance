import { useQuery } from "@tanstack/react-query";
import { getUserId } from "../../api/UsersSettingsApi";

export function UseUserId() {
  const { data, error, isLoading } = useQuery({
    queryFn: () => getUserId,
    queryKey: ["userId"],
  });
  return { data, error, isLoading };
}
