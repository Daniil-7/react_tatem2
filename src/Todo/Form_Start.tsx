import React from 'react';

const FormStart1: React.FC = () => {
  return(
    <>
<div className="container center">
<form action="" method="post" accept-charset="utf-8">
<input name="date" type="date" id="id_date" required />
<button type="submit" className="waves-effect waves-light btn-large">Узнать</button>
</form>
</div>
  </>
  )}

const FormStart: React.FC = () => {
  return (
    
    <FormStart1/>
    
)}
export default FormStart;