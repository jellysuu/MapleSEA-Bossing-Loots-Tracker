
<script type="text/javascript">

  // ================= Content Page =================
  // 0. Global Variables / Document Ready
  // 1. Load Functions
  // 2. CRUD Functions
  // 3. Modal Functions
  // ================= End: Content Page =================






  // =============== Global Variable ===============







  // =============== End: Global Variable ===============


  // =============== Start: Document Ready ===============
  $( document ).ready(function() {

  }); 
  // =============== End: Document Ready ===============







  // ============ Start: Load Functions ============
  // 1. Framework Read 
  // 2. Custom Controller Read

  async function xxxxxxxxxxx(invoice_id){

    try {
      var response = await fetch('<?= site_url('Fw_database/read/69?wn=team_type&wv=MEASUREMENT') ?>'); // Framework
      var response = await fetch('<?= site_url('custom_cc_schedule/') ?>' + type_of_query + "/" + invoice_id); // Custom CC
      var j =  await response.json();
      j.forEach(function(value) {
        var date_formatting = new Date(start_date);
        var start_time_formatting = new Date(start_date);
        var end_time_formatting = new Date(end_date);
        const date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } // Monday 00 January 2022
        const time_options = { hour12: 'false', timeStyle: 'short'} // 00:00
        var date = date_formatting.toLocaleDateString('en-AU', date_options); // Monday 00 January 2022
        var start_time = start_time_formatting.toLocaleTimeString('en-AU', time_options); // 00:00
        var end_time = end_time_formatting.toLocaleTimeString('en-AU', time_options); // 00:00
        maxDate = maxDate.toISOString().split('T')[0]; // yyyy-mm-dd
        
        var xxxxx = value['xxxxx'];
      });
    }
    catch(err) {
      console.log('xxxxxxxxxxx - ' + err);
    }
  }

  // ============ End: Load Functions ============







  // ============== Start: CRUD Functions ==============
  // 1. CRUD Function 
  // 2. CRUD POST (Javascript to PHP Controller)

  // CRUD - Javascript to PHP Controller [POST - JSON Method] 
  function crud_data_to_controller(data, controller_function_name){
    const formData = new FormData();
    var data = JSON.stringify(data);
    formData.append('data', data);
      fetch('<?= site_url('Custom_cc_xxxxx/') ?>' + controller_function_name , {
        method: "post",
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        // PHP Controller to Javascript Response Data
        if(data.crud_from == 'controller_function_name') {
          // Do Something
        }
      })
      .catch((error) => {

      });
  }

  // CRUD - Function [JSON Method]
  function js_function_name(){
    var xxx = $('#xx').val();
    var xxx = $('#xx').val();

    var data_json = [];
    var data_obj = {};

    data_obj ["xxx"] = xxx;
    data_obj ["xxx"] = xxx;

    data_json.push(data_obj);
    crud_data_to_controller(data_json, "controller_function_name_xxxxx");
  }

  // ============== End: CRUD Functions ==============







  // ============= Start: Modal Functions =============
  // Note: Show or Hide Modal Functions



  // ============= End: Modal Functions =============

  </script>