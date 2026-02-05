import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";

export default function Memories() {
    const [showBtn , setShowBtn] = useState(false)
  return (
    <div className='bg-pink-400  text-white'>
    <h2 className='text-center pt-4 text-4xl font-bold mb-7'> 🫵🏻💕ينور عينى</h2>
    <div className='text-right py-4 px-3 leading-10 font-semibold text-xl'>
       <TypeAnimation
       className=''
        sequence={[
          `
          يا أحلى بنت دخلت حياتي بالصدفة 🤍
سنتين مع بعض، ولسه وجودك في حياتي حاجة ما تتعوضش.
من أول يوم وأنا حاسة إن في حد شبهي،
يفهمني من غير ما أتكلم،
ويطبطب عليّ من غير ما يبان،
ويفرحلي بجد مش مجاملة.
ضحكتك أمان،
وكلامك راحة،
 💖 ووجودك بيخلّي أي يوم تقيل يعدّي.
سنتين صحبة،
ضحك من القلب،
دموع اتشالت،
وأسرار في أمان.
♥️ مش محتاجة أقولك قد إيه إنتِ مهمة،
كفاية إنك موجودة،
وكفاية إني لما أحتاج حد
ألاقيك أول واحدة.
 💝 وأتمنى نكمّل سوا
بنفس القُرب،
ونفس العِشرة،
ونفضل دايمًا
اختيار بعض من غير تردد
          `,
()=>{setShowBtn(true)}
        ]}
        speed={50}          // سرعة الكتابة
        wrapper="p"
        cursor={true}
        style={{ whiteSpace: "pre-line" }} // عشان السطور
      />
    <div className="flex justify-center">
              <Link to={"/love"} className={` transition-all duration-300 mt-5 rounded-xl bg-pink-400 border border-black px-16  py-3 ${showBtn? "translate-y-0 opacity-100" :"translate-y-16 opacity-0"}`} type="button"> ابدأ الرحلة </Link>

    </div>
    </div>
    </div>
  )
  
}
