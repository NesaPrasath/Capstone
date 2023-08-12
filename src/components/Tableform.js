import React from 'react';
import Submitbtn from './Submitbtn';

export default function Tableform() {
  return (
    <>
    <h3 className='h3-w'>Find a table for your ocassion</h3>
    <figure style={{display:"flex",justifyContent:"space-between",width:"55%"}} className='form_figure'>
      <img src='tableform1.jpg' alt='form_image' style={{objectFit:"fill",width:"48%"}}/>
      <img src='tableform2.jpg' alt='form_image' style={{objectFit:"fill",width:"48%"}}/>
    </figure>
    <form className='table-form'>
      <input type='datetime-local' className='input'/>
      <select name='table_count' id='table_count' className='drop-down'>
          <option value={2} className='drop-down'>2</option>
          <option value={4} className='drop-down'>4</option>
          <option value={6} className='drop-down'>6</option>
      </select>
      <select name='ocassion' id='ocassion' className='drop-down' value={"ocassion"}>
          <option value={"Birthday"} className='drop-down'>Birthday</option>
          <option value={"Anniversay"} className='drop-down'>Anniversay</option>
          <option value={"Engagement"} className='drop-down'>Engagement</option>
      </select>
      <fieldset>
        <legend><h3 className='h3-w'>seating options</h3></legend>
        <input type='radio' value={"Standard"} id='seating_choice' name='seating_choice'/><label className='p-l p-w'>Standard</label><br/>
        <input type='radio'value={"Outside"} id='seating_choice' name='seating_choice'/><label className='p-l p-w'>Outside</label>
      </fieldset>
      <Submitbtn type={"submit"} text={"Lets Go!"}/>
    </form>
    </>
  );
}
