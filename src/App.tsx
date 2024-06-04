import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [trainerNaam, setTrainerNaam] = useState("Trainer");
  const [clienten, setClienten] = useState([
    { clientNaam: "", trainingsDagen: ["", "", "", "", ""] },
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
    <div className="w-96">
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
        <div className="flex bg-slate-500 flex-wrap">
          <input
            key={clientNummer}
            className="border-2 rounded-md m-2 p-1 text-center"
            value={client.clientNaam}
            placeholder="Client"
            onChange={(e) => veranderClientNaam(e, clientNummer)}
          ></input>
          <div className="flex flex-wrap">
            {client.trainingsDagen.map((trainingsDag, dagNummer) => (
              <input
                key={dagNummer}
                type="number"
                className="w-10 border-2 rounded-md m-2 text-center invalid:bg-red-300"
                value={trainingsDag}
                min="1"
                max="31"
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
        </div>
      ))}
      <button
        onClick={() =>
          setClienten((prevClienten) => [
            ...prevClienten,
            { clientNaam: "", trainingsDagen: ["", "", "", "", ""] },
          ])
        }
        className="flex m-auto bg-slate-50 rounded-md p-1 hover:bg-slate-100"
      >
        Add client
      </button>
      <button className="bg-green-300 flex m-auto p-2 rounded-lg mt-2">Submit</button>
    </div>
  );
}

export default App;
