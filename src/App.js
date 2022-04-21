import "./App.css";
const head1 = ["Mobile operating system"];
const head2 = ["Mobile Manufactures"];
const data = ["Android", "blackberry", "iphone", "window phone"];
const company = ["Samsung", "HTC", "Micromax", "Apple"];
export default function App() {
  return (
    <div className="App">
      <div>
        <h1>
          <ul>
            {head1.map((e) => {
              return <li>{e}</li>;
            })}

            <h6>
              {data.map((e) => {
                return <li>{e}</li>;
              })}
            </h6>
          </ul>
        </h1>

        <h1>
          <ul>
            {head2.map((e) => {
              return <li>{e}</li>;
            })}

            <h6>
              {company.map((e) => {
                return <li>{e}</li>;
              })}
            </h6>
          </ul>
        </h1>
      </div>
    </div>
  );
}
