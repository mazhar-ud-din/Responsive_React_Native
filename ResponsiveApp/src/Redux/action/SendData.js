import {  CheckData } from '../Reducer/Reducer';
import { AllGetData } from '../Reducer/Reducer';

export const sendData = (dispatch) => {

  const item = [
    {
      id: 0,
      name: 'HP',
      Brand: 'NoteBook',
      price: '$300',
      qty: '0',
      src: require('../../Assets/Images/laptop.png')
    },
    {
      id: 1,
      name: 'Slipper',
      Brand: 'Adidas',
      price: '$30',
      qty: '0',
      src: require('../../Assets/Images/slipper.png')
    },
  ]
  dispatch(CheckData(item))
}
export const getData = async (data, dispatch) => {
  const datas = data
  console.log('datas', datas)  
}
export const check = (dispatch) => {
  const checks = [{ id: '0', name: 'max' }]
  dispatch(AllGetData(checks))
}






