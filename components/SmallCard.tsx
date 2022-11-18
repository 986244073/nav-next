const SmallCard = ({ links }: any) => {
  return (
    <div className="grid grid-cols-3  gap-1">
      {links.map((_item: any) => (
        // <div
        //   key={_item.name}
        //   className='bg-white h-14 w-30 flex items-center text-center
        //   justify-center cursor-pointer  rounded-sm transition duration-300
        //    ease-out hover:scale-105 text-gray-600'>
        //   <a target='_blank' href={_item.url}>{_item.name}</a>

        // </div>
        <a
          key={_item.name}
          target='_blank' href={_item.url}
          className='bg-white h-14 w-30 flex items-center text-center
          justify-center cursor-pointer  rounded-sm transition duration-300
           ease-out hover:scale-105 text-gray-600'>
          {_item.name}
        </a>
      ))}
    </div>
  );
}

export default SmallCard;