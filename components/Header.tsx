const Header = ({ siteInfo }) => {
  // console.log('siteInfo', siteInfo)
  return (
    <div className="sticky top-0 z-50 flex p-5 md:px-10 shadow-md bg-white">
      <div className="text-2xl font-bold">{siteInfo.name}</div>
    </div>
  );
}

export default Header;