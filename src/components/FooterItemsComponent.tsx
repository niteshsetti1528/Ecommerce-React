const FooterItemsComponent: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <>
      <div className="text-white text-12 font-sans space-y-2">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default FooterItemsComponent;
