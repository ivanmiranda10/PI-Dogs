import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
import { postDog } from "../../redux/actions";

const useForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dogsDB = useSelector((state) => state.dogsFromDB);

  const [input, setInput] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    life_span: "",
    temperament: [],
  });

  const [lifeSpan, setLifeSpan] = useState({
    Min: "",
    Max: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setLifeSpan({
      ...lifeSpan,
      [e.target.name]: e.target.value,
    });

    setInput({
      ...input,
      [e.target.name]: e.target.value,
      life_span: `${lifeSpan.Min} - ${lifeSpan.Max} years`,
    });

    setError(
      Validation({
        ...input,
        ...lifeSpan,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTemperamentSelect = (e) => {
    // if (!input.temperament.includes("No temperaments")) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
    // } else {
    //   function fixed() {
    //     setInput(function (prevState) {
    //       //    console.log(prevState.temperament)
    //       return {
    //         temperament:
    //           prevState.temperament === "No temperaments"
    //             ? prevState.temperament
    //             : [...input.temperament],
    //       };
    //     });
    //   }
    //   fixed();
    // }
    // console.log(input.temperament)
  };

  const handleTemperamentDelete = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      temperament: input.temperament?.filter((el) => el !== e.target.name),
    });
  };

  const handleSubmit = (e) => {
    if (
      input.weightMin &&
      input.weightMax &&
      input.heightMin &&
      input.heightMax &&
      input.life_span
    ) {
      if (
        !dogsDB
          .map((el) => el.name.toLowerCase())
          .includes(input.name.toLowerCase().trim())
      ) {
        e.preventDefault();
        dispatch(postDog(input));
        // console.log(input)
        setInput({
          name: "",
          weightMin: "",
          weightMax: "",
          heihtMin: "",
          heightMax: "",
          life_span: "",
          temperament: [],
        });
        alert("Dog created Successfully");
        navigate("/home");
      } else {
        e.preventDefault();
        alert(`${input.name.trim()} already exist`);
      }
    } else {
      e.preventDefault();
      alert("Complete the required fields (❗)");
    }
  };

  return {
    input,
    lifeSpan,
    error,
    handleInputChange,
    handleTemperamentSelect,
    handleTemperamentDelete,
    handleSubmit,
  };
};

export default useForm;
