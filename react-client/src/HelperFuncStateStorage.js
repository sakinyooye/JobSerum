import React from 'react';

export default class HelperFuncStateStorage {
  constructor(props){
  }

  //don't console.log here if you're trying to debug.
  //console.log where the function is being called before return and after render

  updateFieldValue(inst, stateName, e) {
    let stateUpdate = {};
    stateUpdate[stateName] = e.target.value;
    inst.setState(stateUpdate);
    return null
  }

  toggleCheckBox(inst, boxName, e) {
    let stateUpdate = {};
    stateUpdate[boxName] = !inst.state[boxName]
    inst.setState(stateUpdate)
    return null;
  }
}