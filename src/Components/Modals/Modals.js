import './Modals.css'; 

import '../../stylings/fonts.css';
import closeCross from '../../images/close.svg';

function Modals({openModalIndex, modalsInfo, modalClose}) {
  const modals = modalsInfo.map((modalInfo,index)=>{
    let modalClass = (index === openModalIndex) ? "modalActive" : "modalHidden";

    const handleOutsideModalClick = (event) => {
      const clickOutsideOfModalContent = !event.target.closest('.modal-content')
      if (clickOutsideOfModalContent) {
        modalClose();
      }
    };

    return(
      <div 
        className={"modal "+modalClass}
        onClick={handleOutsideModalClick}
        key={index}
      >
        <div className="modal-content">
          <img src={closeCross} alt="Close Cross" className="close" onClick={modalClose}/>
          <div className="modalText">
            <h1 className="robotoBold headerText">{modalInfo.title}</h1>
            <p className="robotoRegular paragraphText">{modalInfo.content}</p>
          </div>
        </div>
      </div>
    )
  });

  return(
    modals
  );
}

export default Modals;