import React from "react";
import { GiCyberEye, GiBlindfold } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import Footer from "../Home/Footer/Footer";
import "animate.css";
const Diagonisis = () => {
  return (
    <>
      <div className="bg-colors p-5">
        <p className="pt-32 text-2xl text-center text-white ">Service</p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e3a8a",
            height: "2px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
          className="max-w-[100px] m-auto"
        />
        <p className="mt-5 text-5xl text-center text-white ">
          Diagnosis and treatment
        </p>
        <p className=" max-w-[2200px] p-3 m-auto text-[14px] text-white text-center justify-center items-center  ">
          Proactively envisioned multimedia based expertise and cross-media
          growth strategies. Seamlessly visualize quality intellectual
          <p className="mb-8">
            capital without superior collaboration and idea-sharing.
            Holistically pontificate installed base portals.
          </p>
        </p>
      </div>

      <div className="max-w-[1440px]  m-auto justify-center">
        <p className="mt-24node mt-8 mb-8">
          Distinctively exploit optimal alignments for intuitive bandwidth.
          Quickly coordinate e-business applications through revolutionary
          catalysts for change. Seamlessly underwhelm optimal testing procedures
          whereas bricks-and-clicks processes.
        </p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e5e7eb",
            height: "1px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
          className=" m-auto"
        />
      </div>

      <div className=" max-w-[1440px] animate__animated animate__fadeInUp  m-auto mt-8 gap-12 flex justify-center item-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-24">
        <div>
          <GiCyberEye className="text-sky-500" size={80} />
          <p className="text-3xl ">Eyestrain</p>
          <p className="text-[12px] mt-8">
            Dynamically target high-payoff intellectual capital for customized
            technologies. Objectively integrate emerging core competencies
            before process-centric communities. Dramatically evisculate holistic
            innovation rather than client-centric data.
            <p className="mt-4">
              Progressively maintain extensive infomediaries via extensible
              niches. Dramatically disseminate standardized metrics after
              resource-leveling processes. Objectively pursue diverse catalysts
              for change for interoperable meta-services.
            </p>
            <p className="mt-4">
              Proactively fabricate one-to-one materials via effective
              e-business. Completely synergize scalable e-commerce rather than
              high standards in e-services. Assertively iterate resource
              maximizing products after leading-edge intellectual capital.
            </p>
          </p>
        </div>
        <div>
          <AiOutlineEye className="text-sky-500" size={80} />
          <p className="text-3xl ">Red Eyes</p>
          <p className="text-[12px] mt-8">
            Distinctively re-engineer revolutionary meta-services and premium
            architectures. Intrinsically incubate intuitive opportunities and
            real-time potentialities. Appropriately communicate one-to-one
            technology after plug-and-play networks.
            <p className="mt-4">
              Quickly aggregate B2B users and worldwide potentialities.
              Progressively plagiarize resource-leveling e-commerce through
              resource-leveling core competencies. Dramatically mesh low-risk
              high-yield alignments before transparent e-tailers.
            </p>
            <p className="mt-4">
              Appropriately empower dynamic leadership skills after business
              portals. Globally myocardinate interactive supply chains with
              distinctive quality vectors. Globally revolutionize global sources
              through interoperable services.
            </p>
          </p>
        </div>
        <div>
          <GiBlindfold className="text-sky-500" size={80} />
          <p className="text-3xl ">Night Blindness</p>
          <p className="text-[12px] mt-8">
            Credibly innovate granular internal or “organic” sources whereas
            high standards in web-readiness. Energistically scale future-proof
            core competencies vis-a-vis impactful experiences. Dramatically
            synthesize integrated schemas with optimal networks.
            <p className="mt-4">
              Interactively procrastinate high-payoff content without
              backward-compatible data. Quickly cultivate optimal processes and
              tactical architectures. Completely iterate covalent strategic
              theme areas via accurate e-markets.
            </p>
            <p className="mt-4">
              Globally incubate standards compliant channels before scalable
              benefits. Quickly disseminate superior deliverables whereas
              web-enabled applications. Quickly drive clicks-and-mortar
              catalysts for change before vertical architectures.
            </p>
          </p>
        </div>
      </div>

      <div className="bg-colors p-20">
        <div className="max-w-[1440px] m-auto justify-center gap-24 item-center grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div>
            <h1 className="text-5xl text-white mb-5">
              Get in <span className="font-bold  ">touch</span>
            </h1>
            <div
              style={{
                backgroundColor: "#e2e8f0",
                height: "1px",
                marginTop: "9px",
                marginBottom: "9px",
                // marginRight: "90%",
              }}
            />
            <p className="text-[13px] text-white mt-6">
              Credibly reintermediate backend ideas for cross-platform models.
              Continually reintermediate integrated processes through
              technically sound intellectual capital. Holistically foster
              superior methodologies without market-driven best practices.
              Distinctively exploit optimal alignments for intuitive bandwidth.
              Quickly coordinate e-business applications through revolutionary
              catalysts for change.
            </p>
          </div>
          <div>
            <p className="text-4xl text-white mb-7">Working hourse</p>
            <div
              style={{
                backgroundColor: "#e2e8f0",
                height: "1px",
                marginTop: "9px",
                marginBottom: "9px",
                marginRight: "50%",
              }}

            />
            <p className="text-[12px] mr-24 text-white mt-5">
              If you wich to book an appointment with Medicare,<p> please choose
              any of the days shown below,  optometryst.</p>
            </p>
          </div>
        </div>

     
      </div>
      
      <Footer />
    </>
  );
};

export default Diagonisis;
