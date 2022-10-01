import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./images/icon-dice.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "LOAD_ADVICE", loading: true });
  }, []);
  const advice = useSelector((store) => {
    return store.advicePayload;
  });
  const loading = useSelector((store) => {
    return store.loading;
  });
  const adviceClickHandler = (event) => {
    event.preventDefault();
    dispatch(dispatch({ type: "LOAD_ADVICE", loading: true }));
  };
  return (
    <>
      {!loading ? (
        <div className="App">
          <h1 className="text-xs font-semibold">ADVICE #{advice.id}</h1>
          <p className="text-3xl text-center leading-normal px-4 xs:text-2xl xs:leading-relaxed">
            &ldquo;{advice.advice}&rdquo;
          </p>
          <div className="divider"></div>
          <div onClick={adviceClickHandler} className="bg-color">
            <img src={logo} alt="" width="32px" height="32px" />
          </div>
        </div>
      ) : (
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      )}
    </>
  );
}

export default App;
