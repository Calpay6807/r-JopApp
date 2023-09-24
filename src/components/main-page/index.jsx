import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3030/ilanlar").then((res) => setData(res.data));
  }, []);

  if (data === null) return <>yükleniyor</>;
  return (
    <div className="ilan">
      {data.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <div className="company">
            <img src={item.img} alt="" />
            <p>
              Şİrket: <span> {item.company}</span>
            </p>
            <p>
              Maaş: <span> {item.maaş}</span>
            </p>
            <p>
              Çalışma Türü: <span> {item.çalışmaTürü}</span>{" "}
            </p>
            <p>
              {item.işTürü} <span>{item.date}</span>
            </p>
            <p className="desc">Açıklama: {item.description} </p>
            <NavLink to={"/form"}>Başvur</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
