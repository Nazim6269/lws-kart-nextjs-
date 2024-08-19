import Breadcrubms from '../breadcrumbs/Breadcrubms';
import AmouontChange from './details/AmouontChange';
import ButtonGroups from './details/ButtonGroups';
import Description from './details/Description';
import Images from './details/Images';
import Info from './details/Info';
import SocialIcons from './details/SocialIcons';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-6">
        <Images images={product?.images} />
        <div>
          <Info product={product} />
          <AmouontChange />
          <ButtonGroups />
          <SocialIcons />
        </div>
      </div>
      <Description description={product?.longDescription} />
    </div>
  );
};

export default ProductDetails;
