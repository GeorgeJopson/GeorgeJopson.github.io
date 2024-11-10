import './Modals.css'; 

function Modals({openModalIndex, modalsInfo, modalClose}) {
  let modals = []
  let currentModal = 0
  for(const modalInfo of modalsInfo){
    console.log(modalInfo)
    let modalClass = "";
    if (currentModal === openModalIndex){
      modalClass = "modalActive";
    }else{
      modalClass = "modalHidden";
    }
    modals.push(
      <div className={"modal "+modalClass}>
        <div class="modal-content">
          <p>We are at modal: {modalInfo.title}</p>
          <button onClick={modalClose}>Close</button>
        </div>
      </div>
    )
    currentModal ++;
  }

  return(
    modals
  );
}

export default Modals;