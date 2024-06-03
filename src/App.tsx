import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [trainerNaam, setTrainerNaam] = useState("Trainer");
  const [clienten, setClienten] = useState([
    { clientNaam: "Client", trainingsDagen: ["", "", "", "", ""] },
  ]);

  const trainingMaanden = [
    ["Jan", 1],
    ["Feb", 2],
    ["Mrt", 3],
    ["Apr", 4],
    ["Mei", 5],
    ["Jun", 6],
    ["Jul", 7],
    ["Aug", 8],
    ["Sep", 9],
    ["Okt", 10],
    ["Nov", 11],
    ["Dec", 12],
  ];

  function veranderDag(
    event: React.ChangeEvent<HTMLInputElement>,
    clientNummer: number,
    dagNummer: number
  ) {
    const tempClienten = clienten;
    tempClienten[clientNummer].trainingsDagen[dagNummer] =
      event.currentTarget.value;
    setClienten([...tempClienten]);
  }

  function veranderClientNaam(
    event: React.ChangeEvent<HTMLInputElement>,
    clientNummer: number
  ) {
    const tempClienten = clienten;
    tempClienten[clientNummer].clientNaam = event.currentTarget.value;
    setClienten([...tempClienten]);
  }

  function toevoegenDag(clientNummer: number) {
    const tempClienten = clienten;
    tempClienten[clientNummer].trainingsDagen.push("");
    setClienten([...tempClienten]);
  }

  return (
    <div className="w-full">
      <h2>{trainerNaam}</h2>
      <div className="bg-slate-200 p-2">
        {trainingMaanden.map((maand) => (
          <button
            key={maand[1]}
            className="ml-2 bg-white p-2 rounded-l"
            onClick={() => console.log(maand[1])}
          >
            {maand[0]}
          </button>
        ))}
      </div>
      {clienten.map((client, clientNummer) => (
        <>
          <input
            key={clientNummer}
            className="border-2 rounded-md m-2 p-1 text-center"
            value={client.clientNaam}
            onChange={(e) => veranderClientNaam(e, clientNummer)}
          ></input>
          <div className="flex">
            {client.trainingsDagen.map((trainingsDag, dagNummer) => (
              <input
                key={dagNummer}
                className="w-10 border-2 rounded-md m-2 p-1 text-center"
                value={trainingsDag}
                onChange={(e) => veranderDag(e, clientNummer, dagNummer)}
              ></input>
            ))}
            <button
              key={clientNummer}
              className=" bg-slate-50 w-12 rounded-md hover:bg-slate-100"
              onClick={() => toevoegenDag(clientNummer)}
            >
              +
            </button>
          </div>
        </>
      ))}
      <button
        onClick={() =>
          setClienten((prevClienten) => [
            ...prevClienten,
            { clientNaam: "Client", trainingsDagen: ["", "", "", "", ""] },
          ])
        }
        className="flex m-auto bg-slate-50 rounded-md p-2 hover:bg-slate-100"
      >
        Add client
      </button>
    </div>
  );
}

export default App;
