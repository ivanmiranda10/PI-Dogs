const Validation = (state) => {
  var errors = {};

  if (!state.name) {
    errors.nameErr = "Name required";
  } else if (/[^a-zA-Z ]/.test(state.name)) {
    errors.nameErr = "Name invalid - Only letters";
  } else if (state.name.length > 20) {
    errors.nameErr = "Very large Name";
  }

  if (!state.weightMin) {
    errors.weightMinErr = "Weight Min required";
  } else {
    if (Number(state.weightMin) < 0) {
      errors.weightMinErr = "Weight Min need to start from 0";
    } else if (Number(state.weightMin) > 100) {
      errors.weightMinErr = "Weight Min limit is 100";
    }
  }

  if (!state.weightMax) {
    errors.weightMaxErr = "Weight Max required";
  } else {
    if (Number(state.weightMax) < 0) {
      errors.weightMaxErr = "Weight Max need to start from 0";
    } else {
      if (Number(state.weightMin) > Number(state.weightMax)) {
        errors.weightMinErr = "Can't be greater than Weight Max";
      } else if (Number(state.weightMax) > 100) {
        errors.weightMaxErr = "Weight Max limit is 100";
      }
    }
  }

  if (!state.heightMin) {
    errors.heightMinErr = "Height Min required";
  } else {
    if (Number(state.heightMin) < 0) {
      errors.heightMinErr = "Height Min need to start from 0";
    } else if (Number(state.heightMin) > 100) {
      errors.heightMinErr = "Height Min limit is 100";
    }
  }

  if (!state.heightMax) {
    errors.heightMaxErr = "Height Max required";
  } else {
    if (Number(state.heightMax) < 0) {
      errors.heightMaxErr = "Height Max need to start from 0";
    } else {
      if (Number(state.heightMin) > Number(state.heightMax)) {
        errors.heightMinErr = "Can't be greater than Height Max";
      } else if (Number(state.heightMax) > 100) {
        errors.heightMaxErr = "Height Max limit is 100";
      }
    }
  }

  if (!state.Min) {
    errors.life_spanMinErr = "Life Span Min required";
  } else {
    if (Number(state.Min) < 0) {
      errors.life_spanMinErr = "Life Span Min need to start from 0";
    } else if (Number(state.Min) > 20) {
      errors.life_spanMinErr = "Life Span Min limit is 20";
    }
  }

  if (!state.Max) {
    errors.lifeSpanMaxErr = "Life Span Max required";
  } else {
    if (Number(state.Max) < 0) {
      errors.lifeSpanMaxErr = "Life Span Max need to start from 0";
    } else {
      if (Number(state.Min) > Number(state.Max)) {
        errors.life_spanMinErr = "Can't be greater than Life Span Max";
      } else if (Number(state.Max) > 30) {
        errors.lifeSpanMaxErr = "Life Span Max limit is 30";
      }
    }
  }
  return errors;
};

export default Validation;
