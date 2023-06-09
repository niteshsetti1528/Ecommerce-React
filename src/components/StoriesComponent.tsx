import React from "react";

const StoriesComponent: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div>
      <div className="flex flex-col text-primary mt-5  ml-10">
        <div className="text-14 mb-2 font-bold">{title}</div>
        <div className="text-11 space-y-5">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === SubStories) {
              return React.cloneElement(child, { key: index });
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const SubStories: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export { StoriesComponent, SubStories };
