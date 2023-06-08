import FooterItemsComponent from "./FooterItemsComponent";

const FooterComponent: React.FC<{ items: string[]; title: string }> = ({
  items,
  title,
}) => {
  return (
    <div>
      <div className="text-GreyColor text-12 uppercase text-sm mb-2">
        {title}
      </div>
      <FooterItemsComponent items={items}></FooterItemsComponent>
    </div>
  );
};

export default FooterComponent;
