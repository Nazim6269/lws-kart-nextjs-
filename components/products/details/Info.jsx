import Tags from './Tags';

const Info = ({ product }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-medium uppercase mb-2">{product?.name}</h2>
      <div className="flex items-center mb-4">
        <Tags />
        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
      </div>
      <p className="text-gray-800 font-semibold space-x-2">
        <span>Availability: </span>
        <span className="text-green-600">In Stock</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">Brand: </span>
        <span className="text-gray-600">{product?.brand}</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">Category: </span>
        <span className="text-gray-600">{product?.category}</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">SKU: </span>
        <span className="text-gray-600">BE45VGRT</span>
      </p>

      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">
          ${product?.discountPrice}
        </p>
        <p className="text-base text-gray-400 line-through">
          ${product?.regularPrice}
        </p>
      </div>

      <p className="mt-4 text-gray-600">{product?.shortDescription}</p>
    </div>
  );
};

export default Info;
