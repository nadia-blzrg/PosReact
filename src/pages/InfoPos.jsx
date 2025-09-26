import React from "react";
import { useParams } from "react-router-dom";
import { posData } from "../data/posData"; // adapte le chemin si besoin
import "./infoPos.css";

export default function InfoPos() {
  const { city } = useParams();
  const data = posData[city];

  if (!data) {
    return (
      <div className="info-pos-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "20px" }}>
        ❌ Aucune information disponible pour {city}
      </div>
    );
  }

  return (
    <div className="info-pos-container">
      <div className="info-pos-bg">
        <div className="info-pos-card">
          <h1 className="info-pos-title">
            {city.charAt(0).toUpperCase() + city.slice(1)} – Informations POS
          </h1>

          <table className="info-pos-table">
            <tbody>
              <tr>
                <td className="info-pos-label">Nom POS</td>
                <td>{data.name}</td>
              </tr>

              {/* ✅ Affiche uniquement si un téléphone existe */}
              {data.phone && (
                <tr>
                  <td className="info-pos-label">N° Téléphone</td>
                  <td>📞 {data.phone}</td>
                </tr>
              )}

              <tr>
                <td className="info-pos-label">Adresse</td>
                <td>📍 {data.address}</td>
              </tr>
              <tr>
                <td className="info-pos-label">Localisation GPS</td>
                <td>
                  <a
                    href={data.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-pos-link"
                  >
                    Voir sur Google Maps
                  </a>
                </td>
              </tr>
            </tbody>

          </table>

          <div className="info-pos-back">
            <a href="/">⬅ Retour</a>
          </div>
        </div>
      </div>
    </div>
  );
}
