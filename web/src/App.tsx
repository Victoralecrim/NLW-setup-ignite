import './styles/global.css';


import { Habit } from "./components/Habit"

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={6} />
      <Habit completed={9} />
      <Habit completed={12} />
      <Habit completed={15} />
      <Habit completed={16} />
    </>
  )
}

export default App
