import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";

export default function Memories() {
    const [showBtn , setShowBtn] = useState(false)
  return (
    <div className='bg-pink-400 h-screen text-white'>
    <h2 className='text-center pt-4 text-4xl font-bold mb-7'> 🫵🏻💕ينور عينى</h2>
    <div className='text-right py-4 px-3 leading-10 font-semibold text-xl'>
       <TypeAnimation
       className=''
        sequence={[
          `❤️يا أجمل حكاية قابلتها في حياتي 
من أول مرة دخلت حياتي وأنا حاسس إن في حاجة اتغيرت…
ضحكتك بقت أمان، وصوتك بقى راحة، ووجودك بقى سبب إن اليوم يعدّي أخف.
يمكن ما بعرفش أشرح إحساسي صح،
بس اللي متأكد منه إنك حاجة حلوة ربنا بعتها في طريقي،
كل لحظة بينا ليها مكانها جوا قلبي،
ومهما الدنيا لفت، هفضل شايلك في بالي وفي قلبي.
أنا مش بوعدك بالكمال،
بس بوعدك إني أكون صادق، موجود،
وأختارك كل مرة من غير تردد ✨
تعالي نكمّل سوا، ونعيش كل لحظة كأنها أول مرة ❤️`,
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
