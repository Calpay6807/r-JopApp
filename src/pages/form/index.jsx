import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addJop } from "../../redux/jopSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormArea = () => {
  const [isChecked, setİsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData.get(""));
    const data = Object.fromEntries(formData);
    data.id = v4();
    console.log(data);
    data.date = new Date().toLocaleDateString();

    // apiyi güncelleme

    axios.post("http://localhost:3030/jop", data).then(() => {
      //storu güncelleme
      dispatch(addJop(data));
      navigate("/form-sub");
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adi</label>
          <input name="ad" type="text" />
        </div>
        <div>
          <label>Kullanıcı Soyadi</label>
          <input name="soyad" type="text" />
        </div>
        <div>
          <label>Telefon Numrası</label>
          <input name="phone" type="number" />
        </div>
        <div>
          <label>e-posta</label>
          <input name="eposta" type="email" />
        </div>
        <div>
          <label>Maaş beklentiniz</label>
          <input name="maaş" type="number" />
        </div>
        <div>
          <label>Yaşınız</label>
          <input name="yaş" type="number" />
        </div>
        <textarea name="yorum" cols="30" rows="10" />
        Kendinizden bahsedin
        <div>
          <p className="paragraph">
            <input type="checkbox" />
            okudum onaylıyorum
          </p>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </>
  );
};

export default FormArea;
