import MenuItem from "../../../UI/molecules/MenuItem/MenuItem";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="text-white">
      <MenuItem icon="home" active label="abc" key={1} />
      <MenuItem icon="home" label="Home" key={2} />
    </div>
  );
};

export default Header;
