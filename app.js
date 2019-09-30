function open_card() {
    document.getElementById('openModal').style.display = 'block';
    document.getElementById('pass').focus();
    document.getElementById('pass').value = '';
  }

  function click_close() {
    document.getElementById('openModal').style.display = 'none';
  }
  
  function close_card() {
    document.getElementById('card-two').className = '';
  }

  function enter_pass() {
    var pass = document.getElementById('pass').value;
  
  if(pass == '220619') {
    document.getElementById('openModal').style.display = 'none';
        document.getElementById('card-two').className = 'open-card';
  }
  }

  