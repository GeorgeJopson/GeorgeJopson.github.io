import './Modals.css'; 

function Modals({modalOpen, modalsInfo}) {
  let modals = []
  let currentModal = 0
  for(let modalInfo in modalsInfo){
    let modalClass = "";
    if (currentModal === modalOpen){
      modalClass = "modalActive";
    }else{
      modalClass = "modalHidden";
    }
    modals.push(
      <div className={"modal "+modalClass}>
        <div class="modal-content">
          <p>We are at modal: {modalInfo}</p>
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