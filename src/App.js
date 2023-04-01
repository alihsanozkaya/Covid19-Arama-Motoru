import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [veri, setVeri] = useState("");
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    const fetchData = async  () => {
      await axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => {
        setVeri(res.data[tarih]);
        console.log("oldu")
      })
      .catch((err) => {
        console.log(err);
      })
    }
    fetchData();
  }, [veri, tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="mx-auto mt-4">
            <h2 className="text-white text-center display-3">
              Türkiye Covid-19 Arama Motoru
            </h2>
            <input
              className="form-control"
              placeholder="GG/AA/YYYY"
              onChange={(e) => setTarih(e.target.value)}
              type="text"
            />
            <table className="table">
              <thead>
                <tr className="text-white">
                  <th scope="col">#</th>
                  <th scope="col">Test sayısı</th>
                  <th scope="col">Vaka sayısı</th>
                  <th scope="col">Vefat sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
                  <th className="text-white" scope="row">
                    {veri === undefined ? "Veri bekleniyor" : veri.date}
                  </th>
                  <td className="text-white">
                    {" "}
                    {veri === undefined ? "Veri bekleniyor" : veri.tests}
                  </td>
                  <td className="text-white">
                    {veri === undefined ? "Veri bekleniyor" : veri.patients}
                  </td>
                  <td className="text-white">
                    {veri === undefined ? "Veri bekleniyor" : veri.deaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
