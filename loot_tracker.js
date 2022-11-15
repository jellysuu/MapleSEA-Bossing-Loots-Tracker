
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
    var ocr_text = $('#ocr_text').val();
    var count1 = (ocr_text.match(/Magic Crystal/g) || []).length;
    var count2 = (ocr_text.match(/Sunset Dew/g) || []).length;
    var count3 = (ocr_text.match(/Spell Trace/g) || []).length;
    var count4 = (ocr_text.match(/Honor/g) || []).length;
    var count5 = (ocr_text.match(/High Spell/g) || []).length;
    var count6 = (ocr_text.match(/Low Spell/g) || []).length;
    var count7 = (ocr_text.match(/Reindeer Milk/g) || []).length;
    
    $('.compiled_loots').append(`
      Magic Crystal x${count1}
      Sunset Dew x${count2}
      Spell Trace x${count3}
      Honor x${count4}
      High Spell x${count5}
      Low Spell x${count6}
      Reindeer Milk x${count7}
    `);
  }



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
