import React from "react";
// import "../App.css";
import "../styles/Preuve.css";

const Preuve = () => {
  const handleClick = (link, value) => {
    if (value === true) {
      window.open(link, "_blank");
    }
  };

  const data = [
    {
      type: "Réalisation en cours de formation",
      rows: [
        {
          name: "Installation et configuration d’un serveur Windows avec Active Directory",
          period: "15/03/2025 - 25/03/2025",
          values: [true, false, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1aHQ59syY7HcZV6bUVmPAWA15wYnDHjmF/view?usp=drive_link",
        },
        {
          name: "Installation et configuration d’un serveur AD + domaine (fait en groupe).",
          period: "11/09/2024 - 02/10/2024",
          values: [true, false, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1nxIwrQXAzUMX7unc_Nz2OG_dwRqRwmR5/view?usp=drive_link",
                    },
        {
          name: "Certification (Introspection sur nous même et la voie que nous souhaitons prendre)",
          period: "17/01/2025- 19/04/2025",
          values: [false, false, false, false, false, true],
          valueLink:
            "https://drive.google.com/file/d/12nr1PS20WtpAZWCKh-R-vuEjE7XCm6i-/view?usp=drive_link",
        },
        {
          name: "DPL de Tontatta Security ",
          period: "11/09/2025 - 19/04/2025",
          values: [false, false, true, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1gwo1rJVTcxkanuJs1KT8egYS2q2W9_Ao/view?usp=drive_link",
        },
      ],
    },

    {
      type: "Réalisation en milieu professionnel en cours de première année",
      rows: [
        {
          name: "Dépannage réseau et résolution de pannes (stage chez Prospektor)",
          period: "03/06/2025 - 04/07/2025",
          values: [false, true, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1t0kIKHCQZ-372E75m74GvmBWqLKWEBJz/view?usp=drive_link",
        },
        {
          name: "Installation de systèmes de caisse tactiles et de vidéosurveillance",
          period: "03/06/2025 - 04/07/2025",
          values: [false, false, false, false, true, false],
          valueLink:
            "https://drive.google.com/file/d/1yECaFJLkATxHMnrLjPFg4o-Xub70syF_/view?usp=drive_link",
        },
      ],
    },
  ];

  const headers = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    "Développer la présence en ligne de l’organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
  ];

  return (
    <div className="mainContainer">
      {data.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-lg mb-2">{section.type}</h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  Nom de la réalisation
                </th>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  Période
                </th>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 p-2 bg-gray-100 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="border border-gray-300 p-2 text-center italic text-gray-500"
                  >
                    (Aucune réalisation enregistrée)
                  </td>
                </tr>
              ) : (
                section.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 p-2">{row.name}</td>
                    <td className="border border-gray-300 p-2">{row.period}</td>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        className={
                          row.values[j]
                            ? "linkContainer"
                            : "border border-gray-300 p-2 text-center text-gray-400"
                        }
                        onClick={() =>
                          handleClick(row.valueLink, row.values[j])
                        }
                      >
                        {value ? (
                          <span className="text-gray-400">x</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Preuve;
