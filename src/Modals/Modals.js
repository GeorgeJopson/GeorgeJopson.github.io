import './Modals.css'; 
import '../fonts.css';

function Modals({openModalIndex, modalsInfo, modalClose}) {
  const modals = modalsInfo.map((modalInfo,index)=>{
    let modalClass = (index === openModalIndex) ? "modalActive" : "modalHidden";

    const handleModalClick = (event) => {
      const clickOutsideOfModalContent = !event.target.closest('.modal-content')
      if (clickOutsideOfModalContent) {
        modalClose();
      }
    };

    return(
      <div 
        className={"modal "+modalClass}
        onClick={handleModalClick}
      >
        <div class="modal-content">
          <h1 className="robotoBold">{modalInfo.title}</h1>
          <p className="robotoRegular">{modalInfo.content}</p>
          <button onClick={modalClose}>Close</button>
        </div>
      </div>
    )
  });

  return(
    modals
  );
}

export default Modals;