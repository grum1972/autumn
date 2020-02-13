import Vue from 'vue';
new Vue({
  el: '.feedback',
  data: {
    name: '',
    email: '',
    message: '',
    nameValid: true,
    emailValid: true,
    messageValid: true,
    nameError: '',
    emailError: '',
    messageError: '',
    overlayHidden: true,
    resultMessage: ''

  },
  methods : {
    validateName() {
      this.name = this.$el.querySelector('.form__input--name').value;
      if(this.name.length < 3) {
        this.nameValid = false;
        this.nameError = 'Слишком короткое имя';
      } else {
        this.nameValid = true;
        this.nameError = '';
      }
      return this.nameValid;
      
    },
    validateEmail() {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.email = this.$el.querySelector('.form__input--email').value;
      if (this.email.length < 8) {
        this.emailValid = false;
        this.emailError = 'Короткий e-mail';
      } else if (!regex.test(this.email)) {
        this.emailValid = false;
        this.emailError = 'Неверный e-mail';
      } else {
        this.emailValid = true;
        this.emailError = '';
      }
      return this.emailValid;
    },
    validateMessage() {
      this.message = this.$el.querySelector('.form__input--message').value; 
      if (this.message.length < 10) {
        this.messageValid = false;
        this.messageError = 'Слишком короткое сообщение';
      }
      else {
        this.messageValid = true;
        this.messageError = '';
      }
      
        
      return this.messageValid;
    },
    submitForm() {
      var nameValid =this.validateName(),
          emailValid =this.validateEmail(),
          messageValid =this.validateMessage();
      if (nameValid && emailValid && messageValid){
               
        var userData = {
          username: this.name,
          email: this.email,
          message: this.message
        };
        
        fetch('src/data/sucess.json',
        {method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(userData)}
        ).then((response) =>{
          this.resultMessage = "Сообщение отправлено";
          this.overlayHidden = false;
          setTimeout(this.hideOverlay, 8000);
          console.log(this.resultMessage);
          console.log(this.overlayHidden);
          
        });

      };
    },
    hideOverlay(){
      this.overlayHidden = true;
    }
  }
})