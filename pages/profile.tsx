import Layout from "@/components/layout";
import ProfileSection from "@/components/profile/profile-section";
import PersonalSection from "@/components/profile/personal-section";
import { useProfile } from "@/utils/hooks";

export default function ProfilePage() {

  return (
    <>
      <Layout>
          <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
          <div className="mt-4">
            <ProfileSection />
            <div className="mt-10" />
            <PersonalSection />
          </div>
      </Layout>
    </>
  );
}
