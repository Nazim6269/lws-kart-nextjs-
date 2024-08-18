import Breadcrubms from '@/components/breadcrumbs/Breadcrubms';
import WhishList from '@/components/whishlist/WhishList';

const WhishListPage = () => {
  return (
    <div>
      <Breadcrubms />
      <div className="container gap-6 pt-4 pb-16">
        <WhishList />
      </div>
    </div>
  );
};

export default WhishListPage;
