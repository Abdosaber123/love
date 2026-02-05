import React from "react";
import img1 from "../assets/1000013280.jpg"
import img2 from "../assets/1a8d37f4d96d48a22d8f6f1b1dc54043.jpg"
import img3 from "../assets/6ca4557be13c131270f1f8852ac1e511_t.jpeg"
import img4 from "../assets/dinner.jpg"
export default function Video() {
  return (
    <div className="bg-[#FAA9BC] py-4 px-9">
      <div className=" flex justify-center mt-4 px-3">
        <iframe
        className=""
          width="560"
          height="215"
          src="https://www.youtube.com/embed/NYntUyksG5E?si=bCfcqox0r4uktCK0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="images">
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
            <img src={img1} className="w-[300px]" alt="" srcset="" />
            <p className="mt-3 text-pink-400 font-bold py-2 ">ربنا يخليكى ليا</p>
        </div>
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
            <img src={img2} className="w-[300px]" alt="" srcset="" />
            <p className="mt-3 text-pink-400 font-bold py-2 ">احسن يوم</p>
        </div>
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
            <img src={img3} className="w-[300px]" alt="" srcset="" />
            <p className="mt-3 text-pink-400 font-bold py-2 ">بحبك</p>
        </div>
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
            <img src={img4} className="w-[300px]" alt="" srcset="" />
            <p className="mt-3 text-pink-400 font-bold py-2 ">🫶🏻 💕</p>
        </div>
      </div>
      <div className="time bg-white px-3 py-7 mt-4 rounded-xl shadow-lg">
        <h2 className="text-center text-pink-500 font-semibold">الوقت الى فات معاك</h2>
        <div className="group flex gap-3 flex-wrap px-3 mt-3">
            <div className="1 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center">
                <p className="text-3xl font-semibold mb-3">18</p>
                <p className="text-xl font-bold">ساعة</p>
            </div>
             <div className="2 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center ">
                <p className="text-3xl font-semibold mb-3">551</p>
                <p className="text-xl font-bold">يوم</p>
            </div>
            <div className="3 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center">
                <p className="text-3xl font-semibold mb-3">20</p>
                <p className="text-xl font-bold">ثانية</p>
            </div>
             <div className="4 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center ">
                <p className="text-3xl font-semibold mb-3">19</p>
                <p className="text-xl font-bold">دقيقة</p>
            </div>
        </div>
        <p className="text-center mt-3 font-semibold text-xl text-pink-500">  💖 سوا من 3 / 8 / 2024</p>
        <p className="text-red-200 mt-3 rounded-2xl py-2  bg-red-500 text-center text-3xl font-semibold">بحبك</p>
      </div>
    </div>
  );
}
