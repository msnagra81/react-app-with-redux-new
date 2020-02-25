import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { confirm } from "./Confirmation";

  export const deleteConfirmation = (func,id) => {
    // var isDelete = false;
     confirmAlert({
      title: 'Delete Product',
      message: 'Are you sure to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {func(id);
            window.location.reload();
            window.location.reload();
        }
        },
        {
          label: 'No',
        //   onClick: () => {isDelete= false;}
        }
      ]
    });
  };

  export const confirmOnDelete =()=>{
      return confirm("Do you want to delete this product?","Are you sure?")
  }