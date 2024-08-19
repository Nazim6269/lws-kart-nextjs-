import Tags from './Tags';

const Info = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-medium uppercase mb-2">
        Italian L Shape Sofa
      </h2>
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
        <span className="text-gray-600">Apex</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">Category: </span>
        <span className="text-gray-600">Sofa</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">SKU: </span>
        <span className="text-gray-600">BE45VGRT</span>
      </p>

      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">$45.00</p>
        <p className="text-base text-gray-400 line-through">$55.00</p>
      </div>

      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
        reprehenderit dolore vel mollitia optio consequatur hic asperiores
        inventore suscipit, velit consequuntur, voluptate doloremque iure
        necessitatibus adipisci magnam porro.
      </p>
    </div>
  );
};

export default Info;