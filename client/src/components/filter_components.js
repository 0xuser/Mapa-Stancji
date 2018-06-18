import React from 'react';

export const PersonsInput = (props) => {

  return(
    <fieldset>
      <h3>ilość osób</h3>
      <div>
        <select name="persons">
          <option value="">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </fieldset>
  );
}

export const AreaInput = (props) => {

  return (
    <fieldset>
      <h3>powierzchnia</h3>
      <div>
        <input type="text" name="min_area" min="0" placeholder="od"/>
        <input type="text" name="max_area" min="0" placeholder="do"/>
      </div>
    </fieldset>
  );
}

export const PriceInput = (props) => {

  return (
    <fieldset>
      <h3>cena</h3>
      <div>
        <input type="text" name="min_price" placeholder="od" min="0"/>
        <input type="text" name="max_price" placeholder="do" min="0"/>
      </div>
    </fieldset>
  );
}

export const TypeInput = (props) => {

  return (
    <fieldset >
      <h3>typ</h3>
      <div>
        <label className="check-cont">Pokój
          <input type="checkbox" name="room" id="room-type" value="0"/>
          <span className="checkmark"></span>
        </label>
        <label className="check-cont">Mieszkanie
          <input type="checkbox" name="flat" id="flat-type" value="1"/>
          <span className="checkmark"></span>
        </label>
      </div>
    </fieldset>
  );
}
