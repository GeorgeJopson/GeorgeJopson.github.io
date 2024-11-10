import './Modals.css'; 

function Modals({openModalIndex, modalsInfo, modalClose}) {
  const modals = modalsInfo.map((modalInfo,index)=>{
    let modalClass = (index === openModalIndex) ? "modalActive" : "modalHidden";

    return(
      <div className={"modal "+modalClass}>
        <div class="modal-content">
          <p>We are at modal: {modalInfo.title}</p>
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