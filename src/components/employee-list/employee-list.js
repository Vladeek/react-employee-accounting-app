import './employee-list.css' 
import EmployeeListItem from "../employee-list-item/employee-list-item"

const EmployeeList = ({data, onDelete, onToggleProp})=>{

   const elements = data.map(item => {
      const {id,...itemProps} = item;
      return (
          <EmployeeListItem 
          key={id} {...itemProps} 
          onDelete={()=>onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
      )
  })

  return (
      <ul className="app-list list-group">
          {elements}
      </ul>
  )
}

export default EmployeeList