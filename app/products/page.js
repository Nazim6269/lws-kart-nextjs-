import AmouontChange from '@/components/products/details/AmouontChange';
import ButtonGroups from '@/components/products/details/ButtonGroups';
import Description from '@/components/products/details/Description';
import Images from '@/components/products/details/Images';
import Info from '@/components/products/details/Info';
import SocialIcons from '@/components/products/details/SocialIcons';

const ProductDetailsPage = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-6">
        <Images />
        <div>
          <Info />

          <AmouontChange />

          <ButtonGroups />

          <SocialIcons />
        </div>
      </div>
      <Description />
    </div>
  );
};

export default ProductDetailsPage;
