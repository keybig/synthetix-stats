import { useState } from 'react'
import styles from '../styles/Dropdown.module.css'
import Select from 'react-select'
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin';




const Dropdown = () => {

//reference

    const buttonMap = [
        { id: 1, title: "Daily" },
        { id: 2, title: "1 Week" },
        { id: 3, title: "1 Month" },
        //{ id: 4, title: "one Year" }
      ];

      const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };
// reference end

// dropdowna

const buttonMapDD = [
    { id: 1, title: "Daily" },
    { id: 2, title: "1 Week" },
    { id: 3, title: "1 Month" },
    { id: 4, title: "one Year" }
  ];

  const [timeFrameDD, setTimeFrameDD] = useState(1);
  const [selecta, setSelecta] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false)

const handleActiveDD = (buttons: any) => {
setTimeFrameDD(buttons.id);
setSelecta(buttons.title);
setNavbarOpen(false)
};

const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

console.log(selecta)

const options = [
  { value: 'daily', label: 'Daily', title:"Daily", id: 1 },
  { value: 'weekly', label: '1 Week', title: "Weekly", id: 2 },
  { value: 'monthly', label: '1 month', title: "Monthly", id:3 }
]

const customStyles = {
  option: (provided:any, state:any) => ({
    ...provided,
    background: state.isSelected ? "#00D1FF" : "#10104E",
    color: state.isSelected ? "#10104E" : "#00D1FF",
    fontWeight:700,
    borderRadius:"6.25rem",
    border:"1px solid white",
    fontSize:"3rem"
  }),
  control: (provided:any) => ({
    ...provided,
    background: "#00D1FF",
    padding:10,
    borderRadius:"0.625rem",
    border:"1px solid black"
  }),
  singleValue: (provided:any, state:any) => ({
    ...provided,
    fontSize: 30,
    fontWeight:700,
    color:"#10104E3",
    textAlign:"center",
    border:"1px solid white"
  }),
  menu: (provided:any, state:any) => ({
    ...provided,
    background:"#10104E",
    borderRadius: "0.625rem",
    border: "1px solid white"
  }),
  placeholder: (provided:any) => ({
    ...provided,
    color:"purple"
  })
  
}

const cs = {
  control: (base:any, state:any) => ({
    ...base,
    background: "#00D1FF",
    color: "white",
    
  }),
  menu: (base:any) => ({
    ...base,
    borderRadius: 0,
    marginTop: "0.125rem",
    background:"#10104E",
    padding:10
  }),
  menuList: (base:any, state:any) => ({
    ...base,
    padding:0,
    color:"red",
    background: state.isSelected ? "green" : "blue"
  }),
  options:(base:any) => ({
    ...base,
    background:"pink",
    color: "white"
  }),
  singleValue:(base:any)=> ({
    ...base,
    color:"black",
    background:"#00D1FF"
  })

};


  return (
    <div style={{ background: "white"}}>

        <div className={styles.ddWrap}>

        <nav className={styles.navBar}>
           
            <button onClick={handleToggle}>
                {navbarOpen ? "Close" : "Open"}
           
            </button>
            <ul className={navbarOpen ? styles.showMenuNav : styles.menuNav}>
           
            {buttonMapDD.map((buttonMapDD) => (
            <li
              key={buttonMapDD.id}
              onClick={() => handleActiveDD(buttonMapDD)}
              className={
                buttonMapDD.id === timeFrameDD ? styles.button : styles.inactive
              }
            >
              {buttonMapDD.title}
            </li>))}
           
            </ul>

        </nav>
        
        <div className={styles.hideTest}>
        <Select placeholder={"yooo"} instanceId={11} options={options} styles={customStyles} onChange={(e)=>console.log(console.log(e?.id))}/>
        </div>

        

        </div>

    </div>
  )
}

export default Dropdown