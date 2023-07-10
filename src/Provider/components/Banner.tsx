import React from "react";
import BannerImage from "../../assets/banner.jpg";

export const Banner: React.FC = () => {
  return (
    <div    >
      <img
        src={BannerImage}
        alt="banner"
        style={{
          minWidth: "100%",
          left: "50%",
          height: "100%",
        //   position: "absolute",
        //   transform: "translateX(-10%)",
        //   objectFit: "cover",
        }}
      />
    </div>
  );
};
