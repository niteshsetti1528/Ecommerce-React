import React from "react";
import FooterComponent from "../components/FooterComponent";
import {
  FooterAboutItems,
  FooterConsumerPolicyItems,
  FooterHelpItems,
  FooterRowItems,
  FooterSocialPolicyItems,
} from "../constants/FooterConstants";

import GridInterface from "../interface/GridInterface";

const FooterPage: React.FC = () => {
  return (
    <div className="flex flex-col  w-full bg-FooterColor   pt-7 pb-10">
      <div className="flex flex-row justify-around px-14 mb-11">
        <FooterComponent items={FooterAboutItems} title="About" />

        <FooterComponent items={FooterHelpItems} title="Help" />

        <FooterComponent
          items={FooterConsumerPolicyItems}
          title="Consumer Policy"
        />
        <FooterComponent items={FooterSocialPolicyItems} title="Social" />

        <div className="h-23 bg-gray-400 border border-gray-400"></div>

        <AddressComponent title="Email Us:">
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India
        </AddressComponent>

        <AddressComponent title="Registered Office Address:">
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
          Telephone: 044-45614700
        </AddressComponent>
      </div>
      <div className="h-px bg-gray-400 border-gray-400 w-full"></div>

      <PolicyComponent items={FooterRowItems} />
    </div>
  );
};

const AddressComponent: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div>
      <div className="text-GreyColor text-12  text-sm mb-2">{title}</div>
      <div className=" text-white w-60 text-12">{children}</div>
    </div>
  );
};

const PolicyComponent: React.FC<{ items: GridInterface[] }> = ({ items }) => {
  return (
    <div className="flex space-x-3 justify-around text-white text-14 ml-4 mt-6">
      {items.map((item, index) => (
        <div className="flex flex-row  space-x-3" key={index}>
          <img alt={item.title} src={item.imageSource} />
          <div>{item.title}</div>
        </div>
      ))}
      <div>&copy;2007-2023 Flipkart.com</div>
      <img
        alt="cards"
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
      />
    </div>
  );
};

export default FooterPage;
