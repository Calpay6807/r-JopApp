import axios from "axios";
import React, { useEffect, useState } from "react";

const FormValid = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(" http://localhost:3030/onaylananlar")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  if (data === null) return <>yükleniyor</>;
  return (
    <div className="onaylama">
      <h2>Bizimle Çalışmaya Hak Kazananlar</h2>
      <ul>
        {data.map((item, i) => (
          <div key={i}>
            <h1>
              İsim: {item.ad}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>{" "}
            </h1>
            <p>
              kullanicı Adi: {item.soyad}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>
            </p>
            <p>
              Eposta: {item.eposta}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>
            </p>
            <p>
              telefon: {item.phone}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>
            </p>
            <p>
              Yaş: {item.yaş}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>
            </p>
            <p>
              Maaş beklentisi:{item.maaş}{" "}
              <span>
                <i className="bi bi-patch-check-fill" />
              </span>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FormValid;
