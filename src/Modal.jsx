import React, { useContext } from "react";
import { Context } from "./Context";

const Modal = () => {
  const { veri, setTarih } = useContext(Context);

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
};

export default Modal;
