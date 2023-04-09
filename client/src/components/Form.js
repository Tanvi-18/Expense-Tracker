import React, { useEffect } from 'react'
import{useForm} from 'react-hook-form';
import List from './List'; 
import{default as api} from '../store/apiSlice';

export default function Form(){

  const{register, handleSubmit, resetField} = useForm();
  const[addTransaction] = api.useAddTransactionMutation();


  const onSubmit =async (data)=>{
    if(!data) return {};
    await addTransaction(data).unwrap();
    resetField('name');
    resetField('amount')

    window.location.reload(true);
  }

  // useEffect(() => {

  //   const afterTx = async () => {
  //     await addTransaction(data).unwrap();
  //   resetField('name');
  //   resetField('amount')
  //   };
  //   afterTx();
  // }, [addTransaction])


  return (
    <div className="form max-w-sm mx-auto w-96">

      <h1 className='font--bold pb-4 text-2xl'>Transaction</h1>  
      
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-gap-4">
          {/*<div className="input-group">
            <input type="text" {...register('name')} placeholder='Salaray,Rent,Travel,Food' className='form-input'/> 
          </div>*/}

          <select className='form-input'{...register('type')}  >
            <option value="Travel">Travel, Food, Stocks, Salary, Rent</option>
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Stocks">Stocks</option>
            <option value="Education">Education</option>
            <option value="Medicines">Medicines</option>
            <option value="Business Income">Business Income</option>
            <option value="Interest Received">Interest Received</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select> 


          <select className='form-input' {...register('Investment')} >
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select> 

          <div className="input-group">
            <input type="text" {...register('amount')} placeholder='Amount' className='form-input'/>
          </div>
          <div className="submit-btn">
            <button className='border py-2 text-white bg-indigo-900 w-full'> Make Transaction </button>
          </div>
        </div>
      </form>
      
      <List> </List>


    </div>
  )
}
