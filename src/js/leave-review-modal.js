(() => {
    const refs = {
      openModalBtn: document.querySelector("[rev-modal-open]"),
      closeModalBtn: document.querySelector("[rev-modal-close]"),
      modal: document.querySelector("[rev-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();