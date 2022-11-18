import SmallCard from "./SmallCard"

const Cards = ({ data }: any) => {
  console.log('data', data)
  return (
    <div className="grid  gap-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data?.map((_item: any) => (
        <div key={_item.name}>
          <h2 className="mx-4 py-2 font-bold text-xl text-gray-900">
            {_item.name}
          </h2>
          <SmallCard links={_item.links} />
        </div>
      ))}
    </div>
  );
}

export default Cards;