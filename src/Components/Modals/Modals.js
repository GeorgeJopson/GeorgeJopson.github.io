import './Modals.css'; 

import '../../stylings/text.css';
import closeCross from '../../images/close.svg';

function Modals({openModalIndex, modalsInfo, modalClose}) {
  const modals = modalsInfo.map((modalInfo,index)=>{
    let modalClass = (index === openModalIndex) ? "modalActive" : "modalHidden";

    return(
      <div 
        className={"modalContainer "+modalClass}
        onClick={()=>modalClose()}
        key={index}
      >
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <img src={closeCross} alt="Close Cross" className="close" onClick={modalClose}/>
          <div className="modalText">
            <h1 className="robotoBold headerText">{modalInfo.title}</h1>
            <p className="robotoRegular paragraphText wordWrap">{modalInfo.content}</p>
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