import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import history from "./assest/history1.png";
import { useState } from "react";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

export default function History() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [page, setPage] = useState("HISTORY");

  return (
    <div className="text-gray-200 bg-gray-300">
      <Header isHomePage={isHomePage} page={page} />
      <div className=" text-textCol-secondary text-center my-20">
        <div className="w-[90%] m-auto shadow-sm  shadow-orange-900 rounded-t-xl">
          <div
            className=" rounded-xl font-lato font-bold text-emerald-200 pt-5 bg-cover bg-center md:h-[30vh] h-[20vh] bg-blend-multiply bg-orange-600"
            style={{
              backgroundImage: `url(${history})`,
            }}
          >
            <p className="font-bold text-xl font-roboto md:text-3xl text-emerald-300 mt-14 md:mt-20">
              {" "}
              <FontAwesomeIcon icon={faHistory} spin />
              <span className="px-5">History</span>
              <FontAwesomeIcon icon={faHistory} spin />
            </p>
          </div>
          <p className="p-5 text-lg tracking-wide lg:w-[80%] m-auto pt-16 md:text-2xl">
            ST peter's is one of the long standing churches in the acient city
            of keffi nasarawa state. The church has been in existent over 90
            years old and the first structure of the church was put in place
            with the help of then the igwe ndi igbo keffi (Igwe Nwachinemeruim)
            and so many other prominent men and women in the early 1900. St
            peter's is one of the church that housed so many christain that
            relocated into town in the 90s which led to so constant
            modernization of the church structures. St peter is also the home of
            many priest both in the anglican communiion and the body of christ
            in general as a result of it hospitality in the 90s and even till
            date. The Lord bishop of mabmili diocese Rt Rev Henry s Okeke is
            also played his part in the development of the church and the life
            of it members when he served at the church in the late 90s to early
            20s as a Venerable. The church was finally inaugrated by the former
            bishop of lafia diocese Rt Rev Milliar K Maza in the early 2000s and
            ever since then the church has taken so many significant and
            noticeable improvement both structure wise and in the life of the of
            their memebers
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
