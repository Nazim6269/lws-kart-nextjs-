import { auth } from '@/auth';
import Breadcrubms from '@/components/breadcrumbs/Breadcrubms';
import Account from '@/components/pages/account/Account';
import { redirect } from 'next/navigation';

const AccountPage = async () => {
  const session = await auth();

  if (!session) redirect('/login');

  return (
    <>
      <Breadcrubms />
      <Account user={session?.user} />
    </>
  );
};

export default AccountPage;
