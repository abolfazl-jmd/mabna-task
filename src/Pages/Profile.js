import CompanyForm from "../Components/company-form/CompanyForm";
import ProfilePicture from "../Components/profile-picture-component/ProfilePicture";
import Tabs from "../Components/tabs-component/Tabs";
import Layout from "../Layout/Layout";

const Profile = () => {
  return (
    <Layout title="پروفایل">
      <ProfilePicture />
      <Tabs />
      <CompanyForm />
    </Layout>
  );
};

export default Profile;
