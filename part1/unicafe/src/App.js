import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const values = [good,neutral,bad]
  return (
    <div>
      <Title content='Give Feedback'/>
      <Button name='good' handleClick={()=>setGood(good+1)}/>
      <Button name='neutral' handleClick={()=>setNeutral(neutral+1)}/>
      <Button name='bad' handleClick={()=>setBad(bad+1)}/>
      <Title content='statisics'/>
      <Total values={values}/>
    </div>
  )
}


const Title = ({content}) =>(
  <div>
    <h1>
      {content}
    </h1>
  </div>
);

const Button = ({name,handleClick}) =>{

  return (
    <div>
      <button onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

const Total = ({values}) =>{
  return (
    <div>
      <Data context='good' number={values[0]}/>
      <Data context='neutral' number={values[1]}/>
      <Data context='bad' number={values[2]}/>
      <Data context='all' number={values[0]+values[1]+values[2]}/>
      <Data context='positive' number={(values[0]-values[2])/(values[0]+values[1]+values[2])}/>
      <Data context='positive' number={(values[0])/(values[0]+values[1]+values[2])}/>
    </div>
  );
};

const Data = ({context,number}) => (
  <div>
    <p>
      {context} {number}
    </p>
  </div>
);
export default App