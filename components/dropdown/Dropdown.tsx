import Select from 'react-select'

interface DropdownProps {
    options: any[];
    update: (e:any)=>void;
    instanceId: number;
    placeholder: string;
}

const Dropdown = ({ options, update, instanceId, placeholder }:DropdownProps) => {

    const customStyles = {
        option: (provided:any, state:any) => ({
          ...provided,
          background: state.isSelected ? "#00D1FF" : "#10104E",
          color: state.isSelected ? "#10104E" : "#00D1FF",
          fontWeight:700,
          fontSize:"0.75rem"
        }),
        control: (provided:any) => ({
          ...provided,
          background: "#00D1FF",
          borderRadius:"0.625rem",
          padding:0,
          width:"6rem"
        }),
        singleValue: (provided:any, state:any) => ({
          ...provided,
          fontWeight:700,
          color:"#10104E",
          textAlign:"center",
          fontSize:"0.75rem"
        }),
        menu: (provided:any, state:any) => ({
          ...provided,
          background:"#10104E",
          borderRadius: "0.625rem",
        }),
        placeholder: (provided:any) => ({
          ...provided,
          fontWeight:700,
          color:"#10104E",
          textAlign:"center",
          fontSize:"0.75rem"
        }),
        indicatorContainer: (provided:any) => ({
          ...provided,
          padding: 0,
          margin: 0,
        }),
        dropdownIndicator: (provided:any) => ({
          ...provided,
          color: "#10104E"
        }),
        
      }

  return (
    <Select 
        instanceId={instanceId} 
        onChange={update}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null
        }}
        classNamePrefix={'testin'}
        
    />
  )
}

export default Dropdown