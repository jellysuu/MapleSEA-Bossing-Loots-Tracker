
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
    const file = document.getElementById("file");

    window.addEventListener('paste', e => {
      file.files = e.clipboardData.files;
      const [image_file] = file.files
      if(image_file)
      google_calendar_upload_image_preview.src = URL.createObjectURL(image_file);
    });
  }); 
  // =============== End: Document Ready ===============

  function generate_boss_loots(){
    console.log($('#ocr_text').val());
  }

  console.log("test");



  // ============ Start: Load Functions ============
  // 1. Framework Read 
  // 2. Custom Controller Read

  

  // ============ End: Load Functions ============







  // ============== Start: CRUD Functions ==============
  // 1. CRUD Function 
  // 2. CRUD POST (Javascript to PHP Controller)

  
  

  // ============== End: CRUD Functions ==============







  // ============= Start: Modal Functions =============
  // Note: Show or Hide Modal Functions



  // ============= End: Modal Functions =============
