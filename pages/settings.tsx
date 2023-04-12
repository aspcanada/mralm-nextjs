import Layout from "@/components/layout";
import NotificationsSection from "@/components/profile/notifications-section";

export default function SettingsPage() {
  return (
    <>
      <Layout>
          <h1 className="text-2xl font-semibold text-gray-900">My Settings</h1>
          <div className="mt-4">
            <NotificationsSection />
          </div>
      </Layout>
    </>
  );
}
