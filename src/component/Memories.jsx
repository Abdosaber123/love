import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";

export default function Memories() {
    const [showBtn , setShowBtn] = useState(false)
  return (
    <div className='bg-red-600 text-white'>
    <h2 className='text-center pt-4 text-4xl font-bold mb-7'> لأجمل دكتورة في الدنيا.. فكيها بقى الضحكة مش بتليق غير عليكي 😉❤️</h2>
    <div className='text-right py-4 px-3 leading-10 font-semibold text-xl'>
       <TypeAnimation
       className=''
        sequence={[
          `
          عارف إن الضغط ساعات بيبقى تقيل والمعهد والكورسات وتفاصيل اليوم ممكن تخنق بس عايزك تفتكري دايماً إنك مش أي حد إنتي إنسانة طموحة وشاطرة وكل تعب دلوقتي هو مجرد "سِلمة" للحلم اللي بتبنيه استعيني بالله وخليكي واثقة إن ربنا مش بيضيع تعب حد، وأنا واثق فيكي لأبعد حد وعارف إنك قدها وهتعدي كل ده بامتياز

خليكي فاكرة إنك مهما روحتي أو جيتي ليكي 'سند وضهر' مبيزهقش ومستعد يشوفك مبسوطة اليومين دول هيعدوا بكل قلقهم وهيجي يوم نقعد فيه ونحكي عن الصعوبات دي وإحنا مع بعض  ونضحك ونقول 'أهي بقت ذكريات'. ركزي في حلمك، واعرفي إن بودا دايماً جنبك، خطوة بخطوة.
          `,
()=>{setShowBtn(true)}
        ]}
        speed={30}          // سرعة الكتابة
        wrapper="p"
        cursor={true}
        style={{ whiteSpace: "pre-line" }} // عشان السطور
      />
    <div className="flex justify-center">
              <Link to={"/love"} className={` transition-all duration-300 mt-5 rounded-xl bg-pink-400 border border-black px-16  py-3 ${showBtn? "translate-y-0 opacity-100" :"translate-y-16 opacity-0"}`} type="button"> دوسى هنا وفكى </Link>

    </div>
    </div>
    </div>
  )
  
}
