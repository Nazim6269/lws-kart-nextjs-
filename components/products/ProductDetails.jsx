import Breadcrubms from '../breadcrumbs/Breadcrubms';
import AmouontChange from './details/AmouontChange';
import ButtonGroups from './details/ButtonGroups';
import Description from './details/Description';
import Images from './details/Images';
import Info from './details/Info';
import SocialIcons from './details/SocialIcons';

const ProductDetails = () => {
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

export default ProductDetails;
