
import React from "react";
import "./wilayas.css"; // ✅ import du CSS
import logo from "../assets/qivo2.svg";



export default function Wilayas() {
  const cities = [
    { name: "Alger", slug: "alger" },
    { name: "Oran", slug: "oran" },
    { name: "Tiaret", slug: "tiaret" },
    { name: "Sétif", slug: "setif" },
    { name: "Blida", slug: "blida" },
    { name: "Batna", slug: "batna" },
    { name: "Mascara", slug: "mascara" },
  ];

  return (
    <div className="wilayas-container">
      <div className="wilayas-bg">
        <div className="wilayas-card">
          <div className="wilayas-logo-circle">
            <img src={logo} alt="Logo" />
          </div>

          <div className="wilayas-title">Liste des points de ventes</div>

          <div>
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/pos/${city.slug}`}  // 🔗 vers PosInfo
                className="wilayas-link"
              >
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
