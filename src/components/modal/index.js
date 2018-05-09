import Modals from 'components/modal/index'

const Modal={
  install : function(Vue){
    Vue.component('Modal',Modals)
  }
};

export default Modal