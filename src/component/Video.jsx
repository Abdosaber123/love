import React from "react";
import img1 from "../assets/111111.jpeg";
import img2 from "../assets/22222222222.jpeg";
import img3 from "../assets/333333333.jpeg";
import img4 from "../assets/44444444444444.jpeg";
import img5 from "../assets/5555555555555555555555.jpeg";
import img6 from "../assets/6666666666666666666666.jpeg";
import img7 from "../assets/777777777777777777777777.jpeg";
import img8 from "../assets/88888888888888888.jpeg";
import img9 from "../assets/99999999999999.jpeg";
import img10 from "../assets/1000000000000.jpeg";
import img13 from "../assets/7854778.jpeg";
import video from "../assets/snaptik_7620939719802735893_v3.mp4"
import video2 from "../assets/snaptik_7621312427283565842_v3.mp4"

export default function Video() {
  return (
    <div className="bg-[#FAA9BC] py-4 px-9">
      <div className="  justify-center mt-4 px-3">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GvnKzzY1x34?si=8_ryfjir38ugGFUv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
        <div className="flex justify-center flex-col items-center">
          <video controls width="450">
            <source src={video2} className="h-[10%]" type="video/mp4" />

          </video>
          <p className="mt-4">الفيديو ده ليك قبل ما تصلى</p>
        </div>

      </div>
      <div className="images">
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
          <img src={img1} className="w-[300px]" alt="" srcset="" />
          <p className="mt-3 text-pink-400 font-bold py-2 "> ماينفعش سلمى متكونش موجودة  </p>
        </div>
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
          <img src={img13} className="w-[300px]" alt="" srcset="" />
          <p className="mt-3 text-pink-400 font-bold py-2 ">واضح إن العند والتقشيرة دي مكنتش من فراغ 😂..  بس برضه عسولة ر</p>
        </div>
        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
          <img src={img10} className="w-[300px]" alt="" srcset="" />
          <p className="mt-3 text-pink-400 font-bold py-2 ">بحب اشوف ضحكتك دى عليكي</p>
        </div>




        <div className="1 bg-white w-fit mx-auto rounded-xl flex flex-col  items-center mt-4">
          <img src={img9} className="w-[300px]" alt="" srcset="" />
          <p className="mt-3 text-pink-400 font-bold py-2 ">💘</p>
        </div>
      </div>
      <div className="">
        <video controls width="600">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <p className="text-xl font-bold text-center mt-4">في النهاية.. عايزك تعرفي إن كل اللي شوفتيه ده مجرد جزء بسيط من اللي جوايا ليكي. أنا مش بتاع كلام كتير وإنتي عارفة، بس حبيت أقولك بطريقتي  ركزي في اللي جاي،  هسيبك بقى تعيشي اللحظة مع الويب سايت، ومستني أسمع كلمة 'شكراً يا بودا' لما تخلصي 😉❤️</p>
      {/* <div className="time bg-white px-3 py-7 mt-4 rounded-xl shadow-lg">
        <h2 className="text-center text-pink-500 font-semibold">
          الوقت الى فات معاك
        </h2>
        <div className="group flex gap-3 flex-wrap px-3 mt-3">
          <div className="1 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center">
            <p className="text-3xl font-semibold mb-3">3,600</p>
            <p className="text-xl font-bold">ساعة</p>
          </div>
          <div className="2 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center ">
            <p className="text-3xl font-semibold mb-3">150</p>
            <p className="text-xl font-bold">يوم</p>
          </div>
          <div className="3 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center">
            <p className="text-3xl font-semibold mb-3">12,960,000</p>
            <p className="text-xl font-bold">ثانية</p>
          </div>
          <div className="4 bg-pink-500 py-3 rounded-xl text-white w-[47%] text-center ">
            <p className="text-3xl font-semibold mb-3">216,000</p>
            <p className="text-xl font-bold">دقيقة</p>
          </div>
        </div>
        <p className="text-center mt-3 font-semibold text-xl text-pink-500">
          {" "}
          💖 سوا من 3 / 8 / 2024
        </p>
        <p className="text-red-200 mt-3 rounded-2xl py-2  bg-red-500 text-center text-3xl font-semibold">
          بحبك
        </p>
      </div> */}
    </div>
  );
}
