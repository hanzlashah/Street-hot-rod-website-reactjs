import React from 'react'
import Header from './Header'
import Footer from './Footer'
import pic1 from '../Images/pic1.jpg'
import pic2 from '../Images/pic2.jpg'
import pic3 from '../Images/pic3.jpg'
import pic4 from '../Images/pic4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Home() {
  return (
    <div className='bg-[#9C9CBD]'>
        {/* <img src={pic1} alt="" /> */}
        {/* Home */}
      <Header/>
      
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
      spaceBetween={0} // No space between slides
      slidesPerView={1} // One slide per view (full width)
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
      className="w-full" // Ensure full width
    >
      <SwiperSlide className="w-full h-[300px] flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
<div>
    <img src={pic1} alt="" className='w-[100%] md:w-[100vw]' />
</div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[300px] flex items-center justify-center bg-red-500 text-white text-2xl font-bold">
      <img src={pic2} alt="" className='w-[100%] md:w-[100vw]' />      </SwiperSlide>
      <SwiperSlide className="w-full h-[300px] flex items-center justify-center bg-green-500 text-white text-2xl font-bold">
      <img src={pic3} alt="" className='w-[100%] md:w-[100vw]' />      </SwiperSlide>
      <SwiperSlide className="w-full h-[300px] flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold">
      <img src={pic4} alt="" className='w-[100%] md:w-[100vw]' />      </SwiperSlide>
    </Swiper>
    <div className='p-[50px] md:p-[15vw]'>
        <h1 className='text-center text-[4.5vw] font-[600]'>
Our Motto <br />
‘Always There for You' </h1>
<h2 className='text-center text-[3vw] font-[600] mb-[5vw]'>An American Revolution.</h2>
<h2  className='text-center text-[3vw] font-[500] '>History</h2>
<p  className='text-center  text-[20px] md:text-[2vw] font-[300] '>1950s: Origin</p>
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>Opinions on the origin of the muscle car vary, but the 1949 Oldsmobile Rocket 88, is cited as the first full-sized muscle car. The Rocket 88 was the first time a powerful V8 engine was available in a smaller and lighter body style (in this case the 303 cu in (5.0 L) engine from the larger Oldsmobile 98 with the body from the six-cylinder Oldsmobile 76). The Rocket 88 produced 135 hp (101 kW) at 3600 rpm and 263 lb⋅ft (357 N⋅m) at 1800 rpm and won eight out of ten races in the 1950 NASCAR season. The Rocket 88's Oldsmobile 303 V8 engine (along with the Cadillac 331 engine, also introduced in 1949) are stated to have "launched the modern era of the high-performance V-8."[31] In 1955, the large-sized Chrysler C-300 - the first in a long, 15-year series of large, expensive, performance-first Chryslers - was introduced that produced 300 hp (224 kW) from its 331 cu in (5.4 L) V8 engine, and it was advertised as "America's Most Powerful Car". Capable of accelerating from 0 to 60 mph (97 km/h) in 9.8 seconds and reaching 130 miles per hour (209 km/h), the 1955 Chrysler 300 is also recognized as one of the best-handling cars of its era. The compact-sized 1956 Studebaker Golden Hawk was powered by a 275 hp (205 kW) 352 cu in (5.8 L) Packard V8, the second most powerful engine to the Chrysler 300. The Rambler Rebel, introduced by American Motors Corporation (AMC) in 1957, is the first mid-sized car to be available with a big-block V8 engine.[33] The Rebel followed most of the muscle car formula including "make 'em go fast as well as cheaply." It is therefore considered by some to be the first muscle car. With a 327 cu in (5.4 L) V8 engine producing 255 hp (190 kW), its 0–60 mph acceleration of 7.5 seconds made it the fastest stock American sedan at the time. Only the fuel-injected Chevrolet Corvette beat it by half a second.</p>



<p className='text-center  text-[20px] md:text-[2vw] font-[300] '>Early 1960s: Drag racing influences</p>
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>The popularity and performance of muscle cars grew in the early 1960s, as Mopar (Dodge, Plymouth, and Chrysler) and Ford battled for supremacy in drag racing. The 1961 Chevrolet Impala offered an SS package for $53.80, which consisted of a 409 cu in (6.7 L) V8 engine producing 425 hp (317 kW)[citation needed] along with upgraded brakes, tires, and suspension. The 1962 Dodge Dart 413 (nicknamed Max Wedge) had a 413 cu in (6.8 L) V8 which produced 420 hp (313 kW) and could cover the quarter-mile in under 13 seconds. In 1963, two hundred Ford Galaxie "R-code" cars were factory-built specifically for drag racing, resulting in a full-size car that could cover the quarter-mile in a little over 12 seconds. Upgrades included fiberglass panels, aluminum bumpers, traction bars, and a 427 cu in (7.0 L) Ford FE-based racing engine conservatively rated at 425 hp (317 kW). The road-legal version of the Galaxie 427 used the "Q-code" engine which produced 410 hp (306 kW). The following year, Ford installed the proven 427 "top-oiler" engine in the smaller and lighter Fairlane body, creating the Ford Thunderbolt. The Thunderbolt included several weight-saving measures (including acrylic windows and fibreglass/aluminium body panels and bumpers) and a stock Thunderbolt could cover the quarter-mile in 11.76 seconds. The Thunderbolt was technically road-legal, however, it was considered unsuitable even "for driving to and from the (drag)strip, let alone on the street in everyday use". A total of 111 Thunderbolts were built. The General Motors competitor to the Thunderbolt was the Z-11 option package for the full-size Chevrolet Impala coupe, of which 57 examples were produced in 1963 only. The Z-11 Impala was powered by a 427 cu in (7.0 L) version of the W-series big-block engine, which was officially rated at 430 bhp (321 kW). With a compression ratio of 13.5:1, the engine required high-octane fuel. The RPOZ-11 package also included weight reduction measures such as an aluminum hood and fenders, the removal of sound-deadening material as well as the deletion of the heater and radio. In 1964, a drag racing version of the Dodge 330 was created, called the "330 Lightweight". It was powered by a 426 cu in (7.0 L) version of the Hemi racing engine which was official rated at 425 hp (317 kW), but rumored to have an actual power output higher than this.[51] Weight reduction measures included an aluminium hood, lightweight front bumpers, fenders and doors, polycarbonate side windows, and no sound deadening. Like other lightweights of the era, it came with a factory disclaimer: "Designed for supervised acceleration trials. Not recommended for general everyday driving because of the compromises in the all-round characteristics which must be made for this type of vehicle." Also using the 426 Hemi racing engine was the limited production 1965 Plymouth Satellite 426 Hemi. In 1966, the racing version of the 426 Hemi was replaced by a detuned "Street Hemi" version, also with a size of 426 cu in and an official power rating of 425 bhp (317 kW)). The 1966 Plymouth Satellite 426 Hemi could run a 13.8-second quarter-mile at 104 mph (167 km/h) and had a base price of $3,850.</p>



<p className='text-center  text-[20px] md:text-[2vw] font-[300] '>1964–1970: Peak muscle car era</p> 
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>Although muscle cars sold in relatively small volumes, manufacturers valued the halo effect of the publicity created by these models. Competition between manufacturers led to a horsepower war that peaked in 1970, with some models advertising as much as 450 hp (336 kW). The Pontiac GTO, a car that captured the public mind and strongly influenced the muscle car era, was introduced in 1964 as an optional package for the intermediate-size Pontiac Tempest. The GTO was developed by Pontiac division president John DeLorean and was initially powered by a 389 cu in (6.4 L) V8 engine producing 325 hp (242 kW). The success of the GTO led other GM divisions to develop muscle cars based on intermediate-sized platforms: the 1964 Oldsmobile 442, 1964 Chevrolet Chevelle SS, and 1965 Buick Gran Sport. The AMC V8 engine was enlarged to 390 cu in (6.4 L) in 1968, which produced 315 hp (235 kW) and was first used in the 1968 AMC Rebel SST, AMC Javelin Go-package, and AMC AMX. AMC was a car manufacturing company that made these two incredible cars. AMC only made small economy cars until they hired Dick Teague as a designer, who later became the vice president. AMC wasn't known for being in the top competitors for manufacturing cars, but when they came out with the AMX and the Javelin they became one of the top competitors. As the 1960s progressed, optional equipment and luxury appointments increased in many popular models of "performance-oriented" cars. With the added weight and power-consuming accessories and features, engines had to be more powerful to maintain performance levels, and the cars became more expensive. In response, some "budget" muscle cars began to appear, such as the 1967 Plymouth GTX, the 1968 Plymouth Road Runner, and the 1968 Dodge Super Bee. In 1969, the Plymouth Road Runner was awarded Motor Trend magazine's Car of the Year. With optional performance parts such as intake and exhaust manifolds, upgraded carburetor, and drag-racing tires, the Road Runner had a quarter-mile time of 14.7 seconds at 100.6 mph (161.9 km/h). In this customized form, the cost of the Road Runner was US$3,893. The Plymouth Barracuda was a pony car that could be turned into a muscle car with the addition of the famed Chrysler 426 Hemi, available as an option beginning in 1968, after debuting in street form two years earlier in the Plymouth Belvedere, Dodge Coronet, and Dodge Charger. Originally based on the smaller compact car body and chassis of the Plymouth Valiant, the Barracuda was also available with a 383 cu in (6.3 L) V8 engine producing 300 hp (224 kW). It could run a quarter-mile in 13.33 seconds at 106.50 mph (171.40 km/h)on the drag strip. The base price was $2,796.00; the price as tested by Hot Rod was $3,652. The related 1970 Plymouth Duster was powered by a 340 cu in (5.6 L) V8 engine producing 290 hp (216 kW). Performance figures were 0 to 60 mph (97 km/h) in 6.0 seconds and the quarter-mile time of in 14.7 seconds at 94.3 mph (151.8 km/h). The 427 cu in (7.0 L) Chevrolet L72 big-block engine became available in the mid-sized Chevrolet Chevelle in 1969 as the COPO 427 option. The 427 Chevelle could run a 13.3 sec. quarter-mile at108 mph (174 km/h). Chevrolet rated the engine at 425 hp (317 kW), but the NHRA claimed power output to be 450 hp (340 kW). The following year, the "Chevelle SS 454" model was introduced, which used the 454 cu in (7.4 L) Chevrolet LS6 big-block engine rated at 450 hp (336 kW), the highest factory rating at that time. The fastest muscle car produced by American Motors was the mid-sized 1970 AMC Rebel "The Machine", which was powered by a 390 cu in (6.4 L) engine producing 340 hp (254 kW). The Rebel had a 0–60 mph (97 km/h) time of 6.8 seconds and a quarter-mile run in 14.4 seconds at 99 mph (159 km/h).
</p>


<p className='text-center  text-[20px] md:text-[2vw] font-[300] '>1970s Decline of the segment</p>
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>The popularity of muscle cars declined through the early 1970s, due to factors including the Clean Air Act, the fuel crisis and increasing insurance costs. The 1973 oil crisis resulted in rationing of fuel and higher prices. Muscle cars quickly became unaffordable and impractical for many people. In addition, the automobile insurance industry levied surcharges on all high-powered models. Before the Clean Air Act of 1970, a majority of muscle cars came optioned with high-compression engines (some engines were as high as 11:1), which required high-octane fuel. Before the oil embargo, 100-octane fuel was common. However, following the passage of the Clean Air Act of 1970, octane ratings were lowered to 91 (due in part to the removal of lead). Manufacturers reduced the compression ratio of engines, resulting in reduced performance. Simultaneously, efforts to combat air pollution focused Detroit's attention on emissions control rather than increased power outputs.
</p>


<p className='text-center  text-[20px] md:text-[2vw] font-[300] '>1980s–1990s: Performance revival</p>
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>Muscle car performance began a resurgence in the early 1980s with high output V8 engines introduced for the Ford Mustang GT, Chevrolet Camaro Z28, and Pontiac Firebird Formula/Trans Am. Initially using four-barrel carburetors, engine performance and fuel economy were increased by the mid-1980s using electronic fuel injection systems and advanced engine management controls. Muscle car performance began to reappear on intermediate two-door coupés such as the Chevrolet Monte Carlo SS and Buick Regal. The Buick Regal used turbocharged V6 engines on the Grand National, Turbo-T, T-Type, and GNX models which rivaled the performance of V8 engines. The few muscle cars remaining in production by the mid-1990s included the fourth generation Mustang, fourth generation Camaro, and fourth generation Firebird.</p>


<p className='text-center text-[20px] md:text-[2vw] font-[300] '>2000s to present</p>
<p className=' text-[13px] md:text-[1.5vw] font-[400] font-roboto '>For 2004, the Pontiac GTO was relaunched in the United States as a rebadged captive import version of the Holden Monaro. For 2005, Chrysler introduced muscle car heritage to high-performance V8-powered versions of four-door sedans, the Dodge Charger and Chrysler 300C, using nameplates traditionally used for two-door muscle cars. For 2005, the fifth-generation Ford Mustang, designed to resemble the original first-generation Mustang, brought back the aggressive lines and colors of the original. For 2006, GM relaunched the Chevrolet Monte Carlo SS with a V8 the first V8 on the Monte Carlo in 15 Years, with the same V8 engine used on the Monte Carlo's W-Body sister cars like the Pontiac Grand Prix GXP, Buick Lacrosse Super, and the Chevrolet Impala SS. For 2008, Chrysler re-introduced the Dodge Challenger, which features styling links to the 1970 first-generation Challenger and was claimed by the Chrysler CEO to be "a modern take on one of the most iconic muscle cars".[76] A year later, running on that same sentiment, Chevrolet released the 2009 Camaro, which bears some resemblance to the 1969 first-generation Camaro.</p>

   </div>
      <Footer />
    </div>
  )
}

export default Home
