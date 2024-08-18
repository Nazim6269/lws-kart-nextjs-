import Breadcrubms from '@/components/breadcrumbs/Breadcrubms';
import Billing from './info/Billing';
import Profile from './info/Profile';
import Shipping from './info/Shipping';

const Account = () => {
  return (
    <>
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <Profile />
          <Shipping />
          <Billing />
        </div>
      </div>
    </>
  );
};

export default Account;
