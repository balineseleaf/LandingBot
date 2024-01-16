import React from "react";
import "./Animation.css";

const Animation = () => {
  return (
    <div className="dotted">
      <div className="dotted__wrapper">
        <div className="animated">
          <img src="https://pictures.s3.yandex.net/animation_topic/star_1.svg" alt="svg star" className="star star_size_s" />
          <img src="https://pictures.s3.yandex.net/animation_topic/star_2.svg" alt="svg star" className="star star_size_m" />
          <img src="https://pictures.s3.yandex.net/animation_topic/star_3.svg" alt="svg star" className="star star_size_l" />
          <img src="https://pictures.s3.yandex.net/animation_topic/dots_1.svg" alt="svg dots" className="dots dots_size_s" />
          <img src="https://pictures.s3.yandex.net/animation_topic/dots_2.svg" alt="svg dots" className="dots dots_size_m" />
          <img src="https://pictures.s3.yandex.net/animation_topic/dots_3.svg" alt="svg dots" className="dots dots_size_l" />
        </div>
      </div>
    </div>
  );
}

export default Animation;