export const dynamic = "force-dynamic";

import UserProfile from "@/components/modules/profile";
import { myProfile } from "@/services/auth";

const ProfilePage = async () => {
  const { data } = await myProfile();
  return (
    <div>
      <UserProfile user={data} />
    </div>
  );
};

export default ProfilePage;
