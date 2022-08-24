import { Component } from 'react';

import './employee-list-item.css'

class EmployeeListItem extends Component{

   constructor(props) {
      super(props);

      this.state = {
          salary: this.props.salary,
      }
  }

  onSalaryChange = (e) => {

      const {onSalaryChange, name} = this.props;

      const salaryChange = e.target.value.slice(0, -1);
      this.setState({salary: salaryChange});

      onSalaryChange(name, salaryChange)
  }

   render(){
      let classNames = 'list-group-item d-flex justify-content-between';

      const {name, onDelete, onToggleProp, increase, rise} = this.props;
      if(increase){
         classNames += ' increase';
      }
    
      if(rise){
         classNames += ' like';
      }

      return(
          <li className={classNames}>
             <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
             <input type="text" className="list-group-item-input" defaultValue={this.state.salary + '$'} onChange={this.onSalaryChange}/>
             <div className='d-flex justify-content-center align-items-center'>
                   <button type="button"
                      className="btn-cookie btn-sm "
                      onClick={onToggleProp}
                      data-toggle="increase">
                      <i className="fas fa-cookie"></i>
                   </button>
    
                   <button type="button"
                         className="btn-trash btn-sm "
                         onClick={onDelete}>
                      <i className="fas fa-trash"></i>
                   </button>
                   <i className="fas fa-star"></i>
             </div>
          </li>
      );
   }
}

export default EmployeeListItem