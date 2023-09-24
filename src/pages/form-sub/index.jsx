import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJop, removeItem, setJops } from "../../redux/jopSlice";
import FilterJop from "../../components/filter";

const FormSub = () => {
  const state = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sayfa yenilendiğinde "approved" verilerini localStorage'den al

    axios
      .get("http://localhost:3030/jop")
      .then((res) => dispatch(setJops(res.data)));
  }, []);

  const handleReject = (itemId) => {
    // Redux Toolkit ile öğeyi sil
    dispatch(removeItem(itemId)); // itemId'yi removeItem aksiyonuna gönderin

    // API'den öğeyi sil (gerekirse)
    axios
      .delete(`http://localhost:3030/jop/${itemId}`)
      .then((res) => {
        console.log("Öğe başarıyla silindi.");
      })
      .catch((error) => {
        console.error("Öğe silinirken bir hata oluştu:", error);
      });
  };

  const handleApprove = (itemId) => {
    // Onay işlemi gerçekleştiğinde veriyi Redux store'a ekleyin
    const selectedItem = state.filterform.find((item) => item.id === itemId);
    console.log(selectedItem);

    // Veriyi axios ile sunucuya gönderin
    axios
      .post("http://localhost:3030/onaylananlar", selectedItem)
      .then(() => {
        // Sunucuya başarıyla gönderildiğinde Redux store'a ekleyin
        dispatch(addJop(selectedItem));
        // Rest of your code
      })
      .catch((error) => {
        console.error("Veri sunucuya gönderilirken bir hata oluştu:", error);
      });
  };

  return (
    <div className="container">
      <div>
        <FilterJop />
      </div>
      <div className="cart">
        {state.filterform.map((item, i) => (
          <div className="content" key={i}>
            <h1>{item.ad}</h1>
            <div className="username">{item.soyad}</div>
            <div className="iletişim">
              <p>Email Adresiniz: {item.eposta}</p>
              <p>Telefon Numaranuz: {item.phone}</p>
              <p>{item.date}</p>
            </div>

            <div className="ageSalary">
              <p>Maaş Beklentiniz: {item.maaş}</p>
              <p>Yaşınızı Giriniz: {item.yaş}</p>
            </div>
            <div className="photoCom">
              <p>Kendinizden Bahsedin: {item.yorum}</p>
            </div>
            <div className="button">
              <button onClick={() => handleApprove(item.id)}>Onayla</button>
              <button onClick={() => handleReject(item.id)}>Reddet</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSub;
